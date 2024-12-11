/* eslint-disable spaced-comment */
/* eslint-disable import/order */
import { Appointment } from './model/appointment';
import { readAppointments } from './read-appointments';
//import { readPhotos } from './read-photos';
//import { getDirectReports, getIndirectReports } from './read-reports';
import { splitAppointmentIntoDays } from './util/time-util';
import { buildTimeSheetEntry, writeTimeSheetEntry } from './write-appointments';
//useful for the backend unit test
import cds from '@sap/cds';
const { SELECT } = cds.ql;

export function serviceHandler(srv: any): void {
  srv.on('READ', 'TeamCalendar', async req => {
    // enfore presence of key (for now)
    const year: number = req.data.year;

    if (!year) {
      req.reject(
        400,
        'No key found in the request URL! Please provide a key, e.g. by calling the endpoint like this: /TeamCalendar(2020).'
      );
    }

    try {
      const data = await readAppointments(year, srv);
      return req.reply(data);
    } catch (error) {
      req.reject(
        500,
        'An error occured while trying to read appointments: ' + error.message
      );
    }
  });

/*   srv.on('READ', 'Photo', async req => {
    try {
      const data = await readPhotos(srv);
      return req.reply(data);
    } catch (error) {
      req.reject(
        500,
        'An error occurred while trying to read images: ' + error.message
      );
    }
  }); */

  srv.on('READ', 'LoggedUser', req => {
    const user = req.user; // Extract logged-in user from the request
    return {
        id: '',
        name: user.name,
        email: user.email,
        role: '' //user.roles.join(", "), // Combine roles into a string if needed
    };
});

/* // Event handler for READ requests on the 'Person' entity
srv.on('READ', 'Person', async (req) => {
  try {
    // Access email from the query parameters
    const email = req.query.email;

    if (!email) {
      req.error(400, 'Email parameter is required to fetch person data.');
      return;
    }

    // Fetch direct reports
    const directReports = await getDirectReports(email);

    // Fetch indirect reports
    const indirectReports = await getIndirectReports(directReports);

    // Combine direct and indirect reports into a single response
    const allReports = [...directReports, ...indirectReports];

    // Map to the structure expected by the Person entity
    return allReports.map((report) => ({
      id: report.userId, // Example ID field
      name: report.firstName + ' ' + report.lastName,
      email: report.email,
      jobTitle: report.jobTitle,
      department: report.department, // Adjust as needed
    }));
  } catch (error) {
    console.error('Error handling READ for Person:', error);
    req.error(500, 'An error occurred while fetching person data.');
  }
}); */

  srv.after('UPDATE', 'Appointment', async (payload: Appointment, req) => {
    // the transaction joins the previous read request
    console.log(JSON.stringify(payload, null, 2));
    const tx = srv.transaction(req);
    const [appointment] = await tx.run(
      SELECT.from('Appointment').where({ ID: payload.ID })
    );
    console.log(JSON.stringify(appointment, null, 2));
    if (!appointment) {
      throw new Error(`No appointment found with ID ${payload.ID}`);
    }

    const [person] = await tx.run(
      SELECT.from('Person').where({ ID: appointment.person_ID })
    );
    if (!person) {
      throw new Error(`No person found with ID ${appointment.person_ID}`);
    }
    // split into multiple days and write in parallel
    return Promise.all(
      splitAppointmentIntoDays(appointment)
        .map(day => buildTimeSheetEntry(appointment, person, day))
        .map(writeTimeSheetEntry)
    )
      .then(() => appointment)
      .catch(error => {
        throw Error(`Failed to create appointment! ${error.message}`);
      });
  });
}

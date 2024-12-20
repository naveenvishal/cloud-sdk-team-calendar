import moment from 'moment';
import {
  EmployeeTime,
  ecTimeOffService
} from './generated/ec-time-off-service';
import { Appointment } from './model/appointment';
import { Person } from './model/person';
import { readPersons } from './read-persons';
import { transformSfsfAppointment } from './util/appointment-transformation';

export async function readAppointments(
  year: number,
  srv: any,
  readSfsfAppointmentsByPersonFn = readSfsfAppointmentsByPerson,
): Promise<[{ year: number; appointments: Appointment[]}]> {
  return readPersons(srv)
    .then(persons =>
      Promise.all([
        readLocalAppointments(srv),
        readRemoteAppointments(
          readSfsfAppointmentsByPersonFn,
          transformSfsfAppointment
        )(persons, year)
      ])
    )
    .then(([ localAppointments, sfsfAppointments]) => [ 
      {
        year,
        appointments: [
          ...localAppointments,
          ...sfsfAppointments,
        ]
      }
    ]);
}

export async function readSfsfAppointmentsByPerson(
  person: Person,
  year: number
): Promise<EmployeeTime[]> {
  const timeType = 'VACATION';
  const approval = 'APPROVED';
  const personId = person.sfsfID;
  const from = moment.utc(`${year}-01-01`);
  const to = moment.utc(`${year}-12-31`);

  // TODO: Retrieve EmployeeTime from SAP SuccessFactors here. Use the above variables for filtering.
  // return [];
  const { employeeTimeApi } = ecTimeOffService();
  return employeeTimeApi
    .requestBuilder()
    .getAll()
    .select(
      employeeTimeApi.schema.EXTERNAL_CODE,
      employeeTimeApi.schema.START_TIME,
      employeeTimeApi.schema.START_DATE,
      employeeTimeApi.schema.END_TIME,
      employeeTimeApi.schema.END_DATE,
      employeeTimeApi.schema.APPROVAL_STATUS,
      employeeTimeApi.schema.USER_ID,
      employeeTimeApi.schema.TIME_TYPE
    )
    .filter(
      //employeeTimeApi.schema.TIME_TYPE.equals(timeType),
      employeeTimeApi.schema.APPROVAL_STATUS.equals(approval),
      employeeTimeApi.schema.USER_ID.equals(personId),
      employeeTimeApi.schema.START_DATE.greaterOrEqual(from),
      employeeTimeApi.schema.END_DATE.lessOrEqual(to)
    )
    .execute({ destinationName: 'SFSF' });
}

export async function readLocalAppointments(srv: any): Promise<Appointment[]> {
  return srv
    .read('Appointment')
    .then((appointments: Appointment[]) =>
      appointments.filter(appointment => appointment.status !== 'APPROVED')
    );
}

function readRemoteAppointments<T>(
  readFn: (person: Person, year: number) => Promise<T[]>,
  transformFn: (appointment: T, person: Person, year: number) => Appointment
): (persons: Person[], year: number) => Promise<Appointment[]> {
  return (persons: Person[], year: number) =>
    Promise.all(
      persons.map(person =>
        readFn(person, year).then((appointments: T[]) =>
          appointments.map(appointment =>
            transformFn(appointment, person, year)
          )
        )
      )
    ).then((appointmentsByPerson: Appointment[][]) =>
      appointmentsByPerson.reduce(
        (allAppointments, appointmentsForOnePerson) => [
          ...allAppointments,
          ...appointmentsForOnePerson
        ],
        []
      )
    );
}

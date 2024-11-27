import { TimeSheetEntry } from '../generated/manage-workforce-timesheet-service';
import { EmployeeTime } from '../generated/ec-time-off-service';
import { Photo } from '../generated/foundation-platform-plt-service-1';
import { Appointment } from '../model/appointment';
import { Person } from '../model/person';
import { Image } from '../model/photo';
import { S4AppointmentStatus } from '../model/s4-appointment-status';
import { dateToString, timeToString } from './time-util';

export function transformS4Appointment(
  timeSheetEntry: TimeSheetEntry,
  person: Person,
  year: number
): Appointment {
  return {
    ID: timeSheetEntry.timeSheetRecord,
    start_date: dateToString(timeSheetEntry.timeSheetDate),
    start_time: null,
    end_date: dateToString(timeSheetEntry.timeSheetDate),
    end_time: null,
    title: timeSheetEntry.timeSheetDataFields.timeSheetNote,
    project: timeSheetEntry.timeSheetDataFields.wbsElement,
    info: 'Retrieved from SAP S/4HANA',
    status:
      timeSheetEntry.timeSheetStatus === S4AppointmentStatus.APPROVED
        ? 'APPROVED'
        : 'LOCAL',
    person_ID: person.ID,
    calendar_year: year,
    type: 'Project'
  };
}

export function transformSfsfAppointment(
  eymployeeTime: EmployeeTime,
  person: Person,
  year: number
): Appointment {
  return {
    ID: eymployeeTime.externalCode,
    start_date: dateToString(eymployeeTime.startDate),
    start_time: timeToString(eymployeeTime.startTime),
    end_date: dateToString(eymployeeTime.endDate),
    end_time: timeToString(eymployeeTime.endTime),
    title: eymployeeTime.timeType,
    status: 'APPROVED',
    info: 'Retrieved from SAP SuccessFactors',
    person_ID: person.ID,
    calendar_year: year,
    //type: 'Project',
    type: eymployeeTime.timeType
  };
}

export function transformSfsfPhoto(
  photo: Photo,
  person: Person
): Image {
  return {
    person_ID: person.sfsfID,
    photo: photo.photo
  };
}
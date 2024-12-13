using my.timesheet as timesheet from '../db/data-model';

service TimesheetService{
  // @(requries : 'authenticated-user')
  entity Appointment as projection on timesheet.Appointment;
  //annotate Appointment with @(requires: 'TC_Admin');
  entity Person  @readonly as projection on timesheet.Person;
  entity TeamCalendar  @readonly as projection on timesheet.TeamCalendar;
  entity Sanity {
    key ID: String;
  }
  entity LoggedUser as projection on timesheet.CustomUser;
}

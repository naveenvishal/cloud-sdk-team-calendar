sap.ui.define([
  "com/sap/timesheet/service/http",
  "com/sap/timesheet/util/converter"
], function (http, converter) {
  "use strict";

  var host = "";
  var servicePath = "/odata/v2/TimesheetService";
  var servicePath2 = "/odata/v2";
  var baseUrl = host + servicePath;
  var baseUrl2 = host + servicePath2;

  // http.setCSRFPrefilter(baseUrl);

  return {
    getPersons: function () { //?$filter=hlevel gt 1
      return http.get(baseUrl + "/Person").then(function (response) {
        return response.hasOwnProperty("d")
          ? converter.getResults(converter.getD(response))
          : converter.getValue(response);
      });
    },

    getImages: function () {
      return http.get(baseUrl + "/Photo").then(function (response) {
        return response.hasOwnProperty("d")
          ? converter.getResults(converter.getD(response))
          : response.images;
        });
      },

    getAppointments: function () {
      return http
        .get(baseUrl + "/TeamCalendar(" + new Date().getFullYear() + ")", {
          $expand: "appointments",
          $select: "year,appointments"
        })
        .then(function (response) {
          return response.hasOwnProperty("d")
            ? converter.getResults(converter.getD(response).appointments)
            : response.appointments;
        });
    },

    getLoggedUser: function () {
      return http.get(baseUrl + "/LoggedUser").then(function (response) {
          // Process the response and return the user data
          return response.hasOwnProperty("d")
              ? converter.getResults(converter.getD(response))
              : response;
      });
    },

    createAppointment: function (appointment, personid) {
      var startDate = converter.serializeDate(appointment.start);
      var endDate = converter.serializeDate(appointment.end);
      var appointmentData = {
        start_date: startDate,
        start_time: converter.serializeTime(true),
        end_date: endDate,
        end_time: converter.serializeTime(false),
        title: appointment.title,
        info: appointment.info,
        type: "Project",
        calendar_year: appointment.start.getFullYear(),
        person_ID: personid,
        ID: Date.now() + ""
      };

      return http
        .post(baseUrl + "/Appointment", appointmentData)
        .then(function () {
          return appointmentData;
        });
    },

    updateAppointment: function (appointmentid, payload) {
      if (payload.start) {
        payload.start_date = converter.serializeDate(payload.start);
        delete payload.start;
      }
      if (payload.end) {
        payload.end_date = converter.serializeDate(payload.end);
        delete payload.end;
      }
      return http.patch(
        baseUrl + "/Appointment('" + appointmentid + "')",
        payload
      );
    },

    approveTimeOff: function (appointmentid) {
      return this.updateAppointment(appointmentid, { status: "APPROVED" });
    }
  };
});

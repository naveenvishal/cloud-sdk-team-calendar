sap.ui.define([
  "sap/m/Button",
  "sap/m/Dialog",
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "com/sap/timesheet/model/formatter",
  "com/sap/timesheet/util/converter",
  "com/sap/timesheet/util/setBusy",
  "com/sap/timesheet/service/time-sheet.service",
  "sap/ui/core/Fragment",
	"sap/ui/core/Item",
  "sap/m/MessageToast",
  "sap/ui/core/Messaging",
  "sap/ui/core/message/Message",
	"sap/ui/core/message/MessageType",
  "sap/ui/core/format/DateFormat"
], function (Button, Dialog, Controller, JSONModel, formatter, converter, setBusy, timeSheetService, Fragment, Item, MessageToast, Messaging, Message, MessageType, DateFormat) {
  "use strict";

  return Controller.extend("com.sap.timesheet.controller.Main", {
    formatter: formatter,
    email:'',
    onInit: function () {
      var that = this;
      setBusy(
        this.getView(),
        this.initModels().then(function () {
          that.setAppointmentsToApprove();
          that.initSelect();
        })
      );
    },

    _loadLoggedUserDetails: function () {
      const that = this;

      timeSheetService.getLoggedUser().then(function (userData) {
          console.log("Logged-in User Details:", userData);

          // Bind user data to a model
          const oUserModel = new sap.ui.model.json.JSONModel(userData);
          that.getView().setModel(oUserModel, "userModel");

          // Optional: Show a welcome message
          //sap.m.MessageToast.show("Welcome, " + userData.value[0].email);
          //return userData.value[0].email;
          
      }).catch(function (error) {
          console.error("Error fetching logged-in user details:", error);
          sap.m.MessageToast.show("Failed to fetch logged-in user details.");
      });
    },

    initModels: function () {
//get logged user details      
      this._loadLoggedUserDetails();

      var model = new JSONModel({
        startDate: this._getLastSaturday(),
        useremail: "",
        people: [],
        peopleByType: [],
        target: "",
        filters: [
          { key: "person", text: "Person" },
          { key: "type", text: "Type" },
        ],
        filterstype: [
          { key: "AN_1000", text: "Annual Leave" },
          { key: "WC_PL", text: "Personal Leave" },
          { key: "HOLD", text: "Public Holiday" },
          { key: "6000", text: "Normal Shift" },
          { key: "6001", text: "Day Shift" },
          { key: "6002", text: "Fly In" },
          { key: "6003", text: "Fly Out" },
        ],
        filteredRows: [],
        filterBy: "",
        legendItems: [
/*           {
            text: "Public holiday",
            type: "Type07"
          },
          {
            text: "Team building",
            type: "Type08"
          },
          {
            text: "Work from office 1",
            type: "Type05",
            color: "#ff69b4"
          },
          {
            text: "Work from office 2",
            type: "Type04",
            color: "#add8e6"
          } */
        ],
        legendAppointmentItems: [
          {
            text: "Day Shift",
            type: "Type01"
          },
          {
            text: "Normal Time",
            type: "Type02"
          },
          {
            text: "Time Exception",
            type: "Type20"
          },
          {
            text: "Fly In / Fly Out",
            type: "Type03"
          },
          {
            text: "Onsite Training",
            type: "Type06"
          },        
          {
            text: "Leave",
            type: "Type05"
          },
          {
            text: "Public Holiday",
            type: "Type09"
          },
        ]
      });

      model.setSizeLimit(10000);

      this.getView().setModel(model);

      const oView = this.getView();    
      // set message model
        oView.setModel(Messaging.getMessageModel(), "message");
        Messaging.registerObject(oView, true);

      return jQuery.when(
        this.initPersons(model),
        //this.onFetchImages(model),
        this.initAppointments(model)
/*         this.initphotos(model) */
      );
    },

  initPersons: function (model) {
      var imageMapping = {
        1: "/images/Adrian_Butler.png",
        2: "/images/Alan_Gordon.png",
        3: "/images/Cameron_Tarry.png",
        4: "/images/Jacob_Chalk.png"
      };

      return timeSheetService.getPersons().then(function (persons) {
        var modelData = persons.map(function (person) {
          var personData = {
            pic: imageMapping[person.ID],
            userid: person.ID,
            role: person.role,
            name: person.name
          };

          if (typeof model.getProperty("/people/" + person.ID + "/appointments") === "undefined") {
            personData.appointments = [];
          }

          return personData;
        });

        model.setData({
          people: modelData.reduce(function (objectified, curr) {
            objectified[curr.userid] = curr;
            return objectified;
          }, {})
        }, true);
      });
    },

/*     onFetchImages: function (model) {    
      timeSheetService.getImages().then(
        (images) => {
          // Bind images to a model or directly to a control
          const imageModel = new sap.ui.model.json.JSONModel(images);
          model.setModel(imageModel, "imageModel");
        },
        (error) => {
          console.error("Failed to fetch images", error);
        }
      );
    },
 */
    initAppointments: function (model) {
      return timeSheetService.getAppointments().then(function (appointments) {
//1. group for person        
        var modelData = appointments.reduce(function (groupedAppointments, appointment) {
          if (!groupedAppointments[appointment.person_ID]) {
            groupedAppointments[appointment.person_ID] = { appointments: {} };
          }

//        var temp_appointment = appointments;
        var temp1 = appointment;
        var temp_appointment2 = appointments;
//        temp_appointment.forEach((temp1) => {
            if (temp1.type === '6000') // Normal Time 
          {
            temp_appointment2.forEach((temp2) => {
              if (temp2.person_ID === temp1.person_ID && temp2.start_date === temp1.start_date && temp2.end_date === temp1.end_date && temp2.type === '6001') //Day Shift
              {
                if ( (temp1.start_time == temp2.start_time) && (temp1.end_time == temp2.end_time) )
                  {}
                else{
                  var msg =""; 
                  var msgalert ="";

                    temp1.info = "Mismatch";
                    var time_start1 = new Date(temp1.start_date); var time_end1 = new Date(temp1.end_date);
                    var time_start2 = new Date(temp2.start_date); var time_end2 = new Date(temp2.end_date);
                    var value_start1 = temp1.start_time.split(':');
                    var value_end1 = temp1.end_time.split(':');
                    var value_start2 = temp2.start_time.split(':');
                    var value_end2 = temp2.end_time.split(':');
                    time_start1.setHours(value_start1[0], value_start1[1], value_start1[2], 0)
                    time_end1.setHours(value_end1[0], value_end1[1], value_end1[2], 0)
                    time_start2.setHours(value_start2[0], value_start2[1], value_start2[2], 0)
                    time_end2.setHours(value_end2[0], value_end2[1], value_end2[2], 0)
                    var time_dif1 = ( time_start1 - time_start2) / 1000 / 60;
                    var time_dif2 = ( time_end1 - time_end2) / 1000 / 60;
                    if (temp1.start_time < temp2.start_time)
                      {  time_dif1 = time_dif1 * -1;
                         msg = msg + "Early Clock-In: "; 
                         msg = msg + "by " + time_dif1 + " minutes ";
                      }
                    if (temp1.start_time > temp2.start_time)
                      { msg = msg + "Late Clock-In: "; 
                        msg = msg + "by " + time_dif1 + " minutes ";
                      } 
                    if (temp1.end_time < temp2.end_time)
                      { time_dif2 = time_dif2 * -1;
                        msg = msg + "Early Clock-Out: "; 
                        msg = msg + "by " + time_dif2 + " minutes ";
                      } 
                    if (temp1.end_time > temp2.end_time)
                      { msg = msg + "Late Clock-Out: "; 
                        msg = msg + "by " + time_dif2 + " minutes ";
                      } 
                    temp1.status = msg;
                  
                  var emp = model.getProperty("/people/" + temp1.person_ID);
                  if (emp){
                      msgalert = msg + "for " + emp.name;
                      const oMessage = new Message({
                        message: msgalert,
                        type: MessageType.Warning,
                        target: "/target",
                        processor: model
                      });
                      Messaging.addMessages(oMessage);
                    }
                  } 
              }}); 
          }
          appointment = temp1;
          groupedAppointments[appointment.person_ID].appointments[appointment.ID] = {
            appointmentid: appointment.ID,
            start: converter.deserializeDate(appointment.start_date, appointment.start_time, true),
            end: converter.deserializeDate(appointment.end_date, appointment.end_time, false),
            title: appointment.type === "AN_1000" ? "Annual Leave" : appointment.type === "WC_PL" ? "Personal Leave": appointment.type === "HOLD" ? appointment.title : appointment.type === "6000"? "Normal Time" : appointment.type === "6001"? "Day Shift" : appointment.type === "6002"? "Fly In": appointment.type === "6003"? "Fly Out": appointment.type,
            info: appointment.info === "Mismatch"? appointment.status : appointment.type === "6000"? "Recorded Working Time" : appointment.type === "6001"? "Planned Working Time": appointment.type === "Onsite Training"? "Recorded Working Time" : appointment.type === "AN_1000" ? "Recorded Working Time" : appointment.type === "WC_PL" ? "Recorded Working Time": appointment.type === "HOLD" ? "Public Holiday" : appointment.info,
            customer: appointment.project,
            pic: appointment.info === "Mismatch"? "sap-icon://alert" : appointment.type === "AN_1000" ? "sap-icon://general-leave-request" : appointment.type === "WC_PL" ? "sap-icon://general-leave-request": appointment.type === "HOLD" ? "sap-icon://general-leave-request" :appointment.type === "6000"? "sap-icon://time-account": appointment.type === "6001"? "sap-icon://light-mode" : appointment.type === "6002"? "sap-icon://flight": appointment.type === "6003"? "sap-icon://flight": appointment.type === "Onsite Training"? "sap-icon://user-settings" : "",
            type: appointment.info === "Mismatch"? "Type20" : appointment.type === "AN_1000" ? "Type05" : appointment.type === "WC_PL" ? "Type05" : appointment.type === "HOLD" ? "Type09" : appointment.type === "6000"? "Type02" : appointment.type === "6001"? "Type01" : appointment.type === "6002"? "Type03": appointment.type === "6003"? "Type03": appointment.type === "Onsite Training"? "Type06" : "Type07",
            tentative: appointment.type !== "Vacation" && appointment.status !== "APPROVED",
            code: appointment.type
          };

          return groupedAppointments;
        }, {});
        
//2. group for type
        var modelTypeData = appointments.reduce(function (groupedAppointments, appointment) {
          if (!groupedAppointments[appointment.type]) {
            var lbltype=""; 
            if (appointment.type === "AN_1000"){ lbltype = "Annual Leave (" + appointment.type + ")"}
            else if (appointment.type === "WC_PL"){ lbltype = "Personal Leave (" + appointment.type + ")"}
            else if (appointment.type === "HOLD"){ lbltype = "Public Holiday (" + appointment.type + ")"}
            else if (appointment.type === "6000"){ lbltype = "Normal Time (" + appointment.type + ")"}
            else if (appointment.type === "6001"){ lbltype = "Day Shift (" + appointment.type + ")"}
            else if (appointment.type === "6002"){ lbltype = "Fly In (" + appointment.type + ")"}
            else if (appointment.type === "6003"){ lbltype = "Fly Out (" + appointment.type + ")"}
            else {lbltype = appointment.type}
            groupedAppointments[appointment.type] = { name: lbltype, appointments: {} };
          }

        var temp1 = appointment;
        var temp_appointment2 = appointments;
            if (temp1.type === '6000') // Normal Time 
          {
            temp_appointment2.forEach((temp2) => {
              if (temp2.person_ID === temp1.person_ID && temp2.start_date === temp1.start_date && temp2.end_date === temp1.end_date && temp2.type === '6001') //Day Shift
              {
                if ( (temp1.start_time == temp2.start_time) && (temp1.end_time == temp2.end_time) )
                  {}
                else{
                  var msg =""; 
                  var msgalert ="";

                    temp1.info = "Mismatch";
                    var time_start1 = new Date(temp1.start_date); var time_end1 = new Date(temp1.end_date);
                    var time_start2 = new Date(temp2.start_date); var time_end2 = new Date(temp2.end_date);
                    var value_start1 = temp1.start_time.split(':');
                    var value_end1 = temp1.end_time.split(':');
                    var value_start2 = temp2.start_time.split(':');
                    var value_end2 = temp2.end_time.split(':');
                    time_start1.setHours(value_start1[0], value_start1[1], value_start1[2], 0)
                    time_end1.setHours(value_end1[0], value_end1[1], value_end1[2], 0)
                    time_start2.setHours(value_start2[0], value_start2[1], value_start2[2], 0)
                    time_end2.setHours(value_end2[0], value_end2[1], value_end2[2], 0)
                    var time_dif1 = ( time_start1 - time_start2) / 1000 / 60;
                    var time_dif2 = ( time_end1 - time_end2) / 1000 / 60;
                    if (temp1.start_time < temp2.start_time)
                      {  time_dif1 = time_dif1 * -1;
                        msg = msg + "Early Clock-In: "; 
                        msg = msg + "by " + time_dif1 + " minutes ";
                      }
                    if (temp1.start_time > temp2.start_time)
                      { msg = msg + "Late Clock-In: "; 
                        msg = msg + "by " + time_dif1 + " minutes ";
                      } 
                    if (temp1.end_time < temp2.end_time)
                      { time_dif2 = time_dif2 * -1;
                        msg = msg + "Early Clock-Out: "; 
                        msg = msg + "by " + time_dif2 + " minutes ";
                      } 
                    if (temp1.end_time > temp2.end_time)
                      { msg = msg + "Late Clock-Out: "; 
                        msg = msg + "by " + time_dif2 + " minutes ";
                      } 
                    temp1.status = msg;
                  
                  /* var emp = model.getProperty("/people/" + temp1.person_ID);
                  var msgalert = msg + "for " + emp.name
                  const oMessage = new Message({
                    message: msgalert,
                    type: MessageType.Warning,
                    target: "/target",
                    processor: model
                  });
                  Messaging.addMessages(oMessage); */
                  } 
              }}); 
          }
          appointment = temp1; 
          groupedAppointments[appointment.type].appointments[appointment.ID] = {
            appointmentid: appointment.ID,
            person_ID: appointment.person_ID,
            start: converter.deserializeDate(appointment.start_date, appointment.start_time, true),
            end: converter.deserializeDate(appointment.end_date, appointment.end_time, false),
            title: appointment.type === "AN_1000" ? "Annual Leave" : appointment.type === "WC_PL" ? "Personal Leave": appointment.type === "HOLD" ? appointment.title : appointment.type === "6000"? "Normal Time" : appointment.type === "6001"? "Day Shift" : appointment.type === "6002"? "Fly In": appointment.type === "6003"? "Fly Out": appointment.type,
            info: appointment.info === "Mismatch"? appointment.status : appointment.type === "6000"? "Recorded Working Time" : appointment.type === "6001"? "Planned Working Time": appointment.type === "Onsite Training"? "Recorded Working Time" : appointment.type === "AN_1000" ? "Recorded Working Time" : appointment.type === "WC_PL" ? "Recorded Working Time": appointment.type === "HOLD" ? "Public Holiday" : appointment.info,
            customer: appointment.project,
            pic: appointment.info === "Mismatch"? "sap-icon://alert" : appointment.type === "AN_1000" ? "sap-icon://general-leave-request" : appointment.type === "WC_PL" ? "sap-icon://general-leave-request": appointment.type === "HOLD" ? "sap-icon://general-leave-request" :appointment.type === "6000"? "sap-icon://time-account": appointment.type === "6001"? "sap-icon://light-mode" : appointment.type === "6002"? "sap-icon://flight": appointment.type === "6003"? "sap-icon://flight": appointment.type === "Onsite Training"? "sap-icon://user-settings" : "",
            type: appointment.info === "Mismatch"? "Type20" : appointment.type === "AN_1000" ? "Type05" : appointment.type === "WC_PL" ? "Type05" : appointment.type === "HOLD" ? "Type09" : appointment.type === "6000"? "Type02" : appointment.type === "6001"? "Type01" : appointment.type === "6002"? "Type03": appointment.type === "6003"? "Type03": appointment.type === "Onsite Training"? "Type06" : "Type07",
            tentative: appointment.type !== "Vacation" && appointment.status !== "APPROVED",
            code: appointment.type
          };

          return groupedAppointments;
        }, {});

        model.setData({ people: modelData }, true);
        model.setData({ peopleByType: modelTypeData }, true);

      });
    },

    initSelect: function (){
      var oCurModel = this.getView().getModel();
      var dataByPerson = oCurModel.getData().people;
      var dataAppointments = oCurModel.getData().appointments;
      var dataAppointments2 = dataAppointments;
      var oSelect = this.getView().byId("PlanningCalendarTeamSelect");
      const wantedModel = this.getView().getModel("userModel");
      oCurModel.setData({ useremail: wantedModel.oData.value[0].email }, true);
      if (Object.keys(dataByPerson)) {
        Object.keys(dataByPerson).forEach(function (userid) {
          var sPersonName = dataByPerson[userid].name;
          oSelect.addItem(new Item({
            key: userid,
            text: sPersonName
        }));
    })};
    
    var oMultiComboBox = this.byId("rowHeaderFilterTypes");
    var aItems = oCurModel.getProperty("/filterstype");

    // Extract keys from the items and set them as selected keys
    var aKeys = aItems.map(function (item) {
        return item.key;
    });
    oMultiComboBox.setSelectedKeys(aKeys);

    oCurModel.setProperty('/filteredRows', dataByPerson);
    oCurModel.setProperty('/filterBy', 'person');
    var clone = structuredClone(dataByPerson);
    oCurModel.setProperty('/Clone', clone);

    var oStateModel = new JSONModel();
				oStateModel.setData({
					legendShown: false
				});
				this.getView().setModel(oStateModel, "stateModel");
    
    },

		selectChangeHandler: function(oEvent) {
			this._sSelectedMember = oEvent.getParameter("selectedItem").getKey();
      var oCurModel = this.getView().getModel();
      var dataByPerson = oCurModel.getData().people;
      var dataByType = oCurModel.getData().peopleByType;
      var clone = oCurModel.getData().Clone;
      var filterBy = oCurModel.getProperty('/filterBy');

      if (filterBy === 'person') {
        if (this._sSelectedMember === 'Team') {
          dataByPerson = structuredClone(clone);
        }else
        {
          dataByPerson = structuredClone(clone);
            for (var key in dataByPerson) {
              if (key == this._sSelectedMember) {}
              else {
                delete dataByPerson[key];
              }
            }
        }  
        oCurModel.setProperty("/filteredRows", dataByPerson);
      }
      else if (filterBy === 'type') {
        /* if (this._sSelectedMember === 'Team') {
          dataByType = structuredClone(clone);
        }else
        {
          dataByType = structuredClone(clone);
          for (var key in dataByType) {
            if (key == this._sSelectedMember) {}
            else {
              //delete dataByPerson[key];
            } 
        }
        oCurModel.setProperty("/filteredRows", dataByType);  
      } */
     }
     
	 },

    setAppointmentsToApprove: function () {
      var oCurModel = this.getView().getModel();
      var dataByPerson = oCurModel.getData().people;
      var aAppointmentsToApprove = [];
      if (Object.keys(dataByPerson)) {
        Object.keys(dataByPerson).forEach(function (userid) {
          var sPersonName = dataByPerson[userid].name;
          var appointmentsToApprove = Object.values(
            dataByPerson[userid].appointments
          ).filter(function (el) {
            return el.tentative;
          });

          appointmentsToApprove.forEach(function (appointment) {
            appointment.personName = sPersonName;
            appointment.personid = userid;
            aAppointmentsToApprove.push(appointment);
          });
        });
      }

      oCurModel.setProperty("/appointmentsToApprove", aAppointmentsToApprove);
    },

    handleAppointmentSelect: function (oEvent) {
      var oAppointment = oEvent.getParameter("appointment");

      if (oAppointment) {
        this._handleSingleAppointment(oAppointment);
      }
    },

    handleOkButton: function () {
      var that = this;
      var oFrag = sap.ui.core.Fragment;
      var oStartValue = oFrag
        .byId("myPopoverFrag", "startDate")
        .getDateValue();
      var oEndValue = oFrag.byId("myPopoverFrag", "endDate").getDateValue();
      var sInfoValue = oFrag.byId("myPopoverFrag", "moreInfo").getText();
      var sAppointmentPath = this._oDetailsPopover.getBindingContext().sPath;
      var appointmentid = sAppointmentPath.split("/").pop();

      setBusy(
        this.getView(),
        timeSheetService.updateAppointment(appointmentid, {
          start: oStartValue,
          end: oEndValue,
          info: sInfoValue
        })
          .then(function () {
            that._oDetailsPopover.getModel().setProperty(sAppointmentPath + "/start", oStartValue);
            that._oDetailsPopover.getModel().setProperty(sAppointmentPath + "/end", oEndValue);
            that._oDetailsPopover.getModel().setProperty(sAppointmentPath + "/info", sInfoValue);
            that._oDetailsPopover.close();
          })
      );
    },

    handleOKButton: function () {
      this._oDetailsPopover.close();
    },

    handleAppointmentCreate: function () {
      var oFrag = sap.ui.core.Fragment,
        oDateTimePickerStart,
        oDateTimePickerEnd,
        oBeginButton;

      this._createDialog();

      oFrag
        .byId("myFrag", "selectPerson")
        .setSelectedItem(oFrag.byId("myFrag", "selectPerson").getItems()[0]);

      oDateTimePickerStart = oFrag.byId("myFrag", "startDate");
      oDateTimePickerEnd = oFrag.byId("myFrag", "endDate");
      oBeginButton = this.oNewAppointmentDialog.getBeginButton();

      oDateTimePickerStart.setValue("");
      oDateTimePickerEnd.setValue("");
      oDateTimePickerStart.setValueState("None");
      oDateTimePickerEnd.setValueState("None");

      this.updateButtonEnabledState(
        oDateTimePickerStart,
        oDateTimePickerEnd,
        oBeginButton
      );
      this.oNewAppointmentDialog.open();
    },

    handleAppointmentAddWithContext: function (oEvent) {
      var oFrag = sap.ui.core.Fragment,
        currentRow,
        sPersonName,
        oSelect,
        oSelectedItem,
        oSelectedIntervalStart,
        oStartDate,
        oSelectedIntervalEnd,
        oEndDate,
        oDateTimePickerStart,
        oDateTimePickerEnd,
        oBeginButton;

      this._createDialog();

      currentRow = oEvent.getParameter("row");
      sPersonName = currentRow.getTitle();
      oSelect = this.oNewAppointmentDialog.getContent()[0].getContent()[1];
      oSelectedItem = oSelect.getItems().filter(function (oItem) {
        return oItem.getText() === sPersonName;
      })[0];
      oSelect.setSelectedItem(oSelectedItem);

      oSelectedIntervalStart = oEvent.getParameter("startDate");
      oStartDate = oFrag.byId("myFrag", "startDate");
      oStartDate.setDateValue(oSelectedIntervalStart);

      oSelectedIntervalEnd = oEvent.getParameter("endDate");
      oEndDate = oFrag.byId("myFrag", "endDate");
      oEndDate.setDateValue(oSelectedIntervalEnd);

      oDateTimePickerStart = oFrag.byId("myFrag", "startDate");
      oDateTimePickerEnd = oFrag.byId("myFrag", "endDate");
      oBeginButton = this.oNewAppointmentDialog.getBeginButton();

      oDateTimePickerStart.setValueState("None");
      oDateTimePickerEnd.setValueState("None");

      this.updateButtonEnabledState(
        oDateTimePickerStart,
        oDateTimePickerEnd,
        oBeginButton
      );
      this.oNewAppointmentDialog.open();
    },

    _validateDateTimePicker: function (sValue, oDateTimePicker) {
      if (sValue === "") {
        oDateTimePicker.setValueState("Error");
      } else {
        oDateTimePicker.setValueState("None");
      }
    },

    updateButtonEnabledState: function (
      oDateTimePickerStart,
      oDateTimePickerEnd,
      oButton
    ) {
      var bEnabled =
        oDateTimePickerStart.getValueState() !== "Error" &&
        oDateTimePickerStart.getValue() !== "" &&
        oDateTimePickerEnd.getValue() !== "" &&
        oDateTimePickerEnd.getValueState() !== "Error";

      oButton.setEnabled(bEnabled);
    },

    handleDetailsChange: function (oEvent) {
      var oFrag = sap.ui.core.Fragment,
        oDTPStartD = oFrag.byId("myPopoverFrag", "startDate"),
        oDTPStartT = oFrag.byId("myPopoverFrag", "startTime"),
        oDTPEndD = oFrag.byId("myPopoverFrag", "endDate"),
        oDTPEndT = oFrag.byId("myPopoverFrag", "endTime"),
        oOKButton = oFrag.byId("myPopoverFrag", "OKButton");

      this._validateDateTimePicker(
        oEvent.getParameter("value"),
        oEvent.getSource()
      );
      this.updateButtonEnabledState(oDTPStartD, oDTPStartT, oDTPEndD, oDTPEndT, oOKButton);
    },

    handleCreateChange: function (oEvent) {
      var oFrag = sap.ui.core.Fragment,
        oDateTimePickerStart = oFrag.byId("myFrag", "startDate"),
        oDateTimePickerEnd = oFrag.byId("myFrag", "endDate"),
        oBeginButton = this.oNewAppointmentDialog.getBeginButton();

      this._validateDateTimePicker(
        oEvent.getParameter("value"),
        oEvent.getSource()
      );

      this.updateButtonEnabledState(
        oDateTimePickerStart,
        oDateTimePickerEnd,
        oBeginButton
      );
    },

    _createDialog: function () {
      var oFrag = sap.ui.core.Fragment,
        that = this,
        oStartDate,
        oEndDate,
        sTitle,
        sPersonID,
        sInfoResponse,
        oNewAppointment,
        oModel,
        sPath,
        oPersonAppointments;

      if (!that.oNewAppointmentDialog) {
        that.oNewAppointmentDialog = new Dialog({
          title: "Add a new appointment",
          content: [
            sap.ui.xmlfragment("myFrag", "com.sap.timesheet.fragments.Create", this)
          ],
          beginButton: new Button({
            text: "Create",
            enabled: false,
            press: function () {
              oStartDate = oFrag.byId("myFrag", "startDate").getDateValue();
              oEndDate = oFrag.byId("myFrag", "endDate").getDateValue();
              oEndDate.setHours(23);
              oEndDate.setMinutes(59);
              oEndDate.setSeconds(59);
              sTitle = oFrag.byId("myFrag", "inputTitle").getValue();
              sInfoResponse = oFrag.byId("myFrag", "moreInfo").getValue();
              sPersonID = oFrag.byId("myFrag", "selectPerson").getSelectedKey();

              if (
                oFrag.byId("myFrag", "startDate").getValueState() !== "Error" &&
                oFrag.byId("myFrag", "endDate").getValueState() !== "Error"
              ) {
                oNewAppointment = {
                  start: oStartDate,
                  end: oEndDate,
                  title: sTitle,
                  info: sInfoResponse,
                  type: "Type06",
                  tentative: true
                };

                setBusy(
                  that.getView(),
                  timeSheetService
                    .createAppointment(oNewAppointment, sPersonID)
                    .then(function (appointment) {
                      oModel = that.getView().getModel();
                      sPath = "/people/" + sPersonID + "/appointments";
                      oPersonAppointments = oModel.getProperty(sPath);
                      oNewAppointment.appointmentid = appointment.ID;

                      oPersonAppointments[appointment.ID] = oNewAppointment;

                      oModel.setProperty(sPath, oPersonAppointments);
                      that.oNewAppointmentDialog.close();

                      that.setAppointmentsToApprove();
                    })
                );
              }
            }
          }),
          endButton: new Button({
            text: "Close",
            press: function () {
              that.oNewAppointmentDialog.close();
            }
          })
        });

        that.oNewAppointmentDialog.addStyleClass("sapUiContentPadding");
        this.getView().addDependent(that.oNewAppointmentDialog);
      }
    },

    _handleSingleAppointment: function (oAppointment) {
      var oFrag = sap.ui.core.Fragment,
        oAppBC,
        oDatePickerStart,
        oTimePickerStart,
        oDatePickerEnd,
        oTimePickerEnd,
        oInfoInput;

      if (!this._oDetailsPopover) {
        this._oDetailsPopover = sap.ui.xmlfragment("myPopoverFrag", "com.sap.timesheet.fragments.Details", this);
        this.getView().addDependent(this._oDetailsPopover);
      }

      // the binding context is needed, because later when the OK button is clicked, the information must be updated
      oAppBC = oAppointment.getBindingContext();

      this._oDetailsPopover.setBindingContext(oAppBC);

      oDatePickerStart = oFrag.byId("myPopoverFrag", "startDate");
      oTimePickerStart = oFrag.byId("myPopoverFrag", "startTime");
      oDatePickerEnd = oFrag.byId("myPopoverFrag", "endDate");
      oTimePickerEnd = oFrag.byId("myPopoverFrag", "endTime");
      oInfoInput = oFrag.byId("myPopoverFrag", "moreInfo");

      oDatePickerStart.setDateValue(oAppointment.getStartDate());
      var stime = oAppointment.getProperty("startDate").toLocaleTimeString();
      oTimePickerStart.setText(stime);
      oDatePickerEnd.setDateValue(oAppointment.getEndDate());
      stime = oAppointment.getProperty("endDate").toLocaleTimeString();
      oTimePickerEnd.setText(stime);
      oInfoInput.setText(oAppointment.getText());

      oDatePickerStart.setValueState("None");
      /* oTimePickerStart.setValueState("None"); */
      oDatePickerEnd.setValueState("None");
      /* oTimePickerEnd.setValueState("None"); */

      this._oDetailsPopover.openBy(oAppointment);
    },

    handleAppointmentDragEnter: function (oEvent) {
      // if (this.isAppointmentOverlap(oEvent, oEvent.getParameter("calendarRow"))) {
      // 	oEvent.preventDefault();
      // }
    },

    handleAppointmentDrop: function (oEvent) {
      var that = this;
      var oAppointment = oEvent.getParameter("appointment");
      var oStartDate = oEvent.getParameter("startDate");
      var oEndDate = oEvent.getParameter("endDate");
      var oCalendarRow = oEvent.getParameter("calendarRow");
      var bCopy = oEvent.getParameter("copy");
      var oModel = this.getView().getModel();
      var oAppBindingContext = oAppointment.getBindingContext();
      var oRowBindingContext = oCalendarRow.getBindingContext();
      var person = oRowBindingContext.getObject();
      var appointment = oAppBindingContext.getObject();
      var aPath = oAppBindingContext.getPath().split("/");
      var sRowAppointmentsPath = aPath.join("/");

      // "copy" appointment
      if (bCopy) {
        var oProps = jQuery.extend({}, appointment);
        oProps.start = oStartDate;
        oProps.end = oEndDate;

        setBusy(
          this.getView(),
          timeSheetService
            .createAppointment(oProps, person.userid)
            .then(function (newAppointment) {
              person.appointments[oProps.ID] = oProps;
              person.appointments[oProps.ID].appointmentid = newAppointment.ID;
            })
        );
      } else {
        // "move" appointment
        oModel.setProperty("start", oStartDate, oAppBindingContext);
        oModel.setProperty("end", oEndDate, oAppBindingContext);

        if (oAppointment.getParent() !== oCalendarRow) {
          appointment.personName = person.name;
          appointment.personid = person.userid;

          person.appointments[appointment.appointmentid] = appointment;

          delete oModel.getProperty(sRowAppointmentsPath)[appointment.appointmentid];
        }

        setBusy(
          this.getView(),
          timeSheetService
            .updateAppointment(appointment.appointmentid, {
              start: oStartDate,
              end: oEndDate,
              person_ID: person.userid
            })
            .then(function () {
              that.setAppointmentsToApprove();
            })
        );
      }

      oModel.refresh(true);
    },

    handleAppointmentResize: function (oEvent) {
      var oAppointment = oEvent.getParameter("appointment"),
        oStartDate = oEvent.getParameter("startDate"),
        oEndDate = oEvent.getParameter("endDate");

      oAppointment
        .setStartDate(oStartDate)
        .setEndDate(oEndDate);

      var bc = oAppointment.getBindingContext();

      setBusy(
        this.getView(),
        timeSheetService.updateAppointment(bc.getObject().appointmentid, {
          start: oStartDate,
          end: oEndDate
        })
      );
    },

    onApproveHours: function (oEvent) {
      var that = this;
      var bc = oEvent.getSource().getBindingContext();
      var appointment = bc.getObject();

      this.getView()
        .getModel()
        .setProperty(
          "/people/" + appointment.personid + "/appointments/" + appointment.appointmentid + "/tentative",
          false
        );
      setBusy(
        this.getView(),
        timeSheetService
          .approveTimeOff(appointment.appointmentid)
          .then(function () {
            that.setAppointmentsToApprove();
          })
      );
    },

    _getRowHeaderColor: function (sPersonID) {
      // Define logic to determine the row header color class
      switch (sPersonID) {
          case "1":
              return "rowHeaderColorRed";
          case "2":
              return "rowHeaderColorBlue";
          case "3":
              return "rowHeaderColorGreen";
          default:
              return "rowHeaderColorRed"; // Default class if no condition matches
      }
  },

    handleRowHeaderPress: function (oEvent) {
      MessageToast.show("rowHeaderPressed on row: " + oEvent.getParameter("row").getId());
    },

    async onMessagePopoverPress(oEvent) {
			const oSourceControl = oEvent.getSource();
			const oMessagePopover = await this._getMessagePopover();
			oMessagePopover.openBy(oSourceControl);
		},

    _getMessagePopover() {
			return this.loadFragment({
				name: "com.sap.timesheet.view.MessagePopover"
			});
		},

    onRefreshPress: function () {
//1.
/*       // Keep a reference to current view settings
      const oModel = this.getView().getModel();
      const oCurrentContext = oModel.getContext("/");
      // Show busy indicator while loading
      sap.ui.core.BusyIndicator.show(0);
   
      // Reload the data - rebind or refresh model
      oModel.refresh(true);
   
      sap.ui.core.BusyIndicator.hide();
      // Optionally reapply any user settings if needed
      // e.g., re-select filters, maintain view mode (day/week)
      // Hide busy indicator after refresh
        oModel.attachRequestCompleted(function() {
        sap.ui.core.BusyIndicator.hide();
      }); */

//2.      
     window.location.reload();
    },

    onRowHeaderFilterChange: function (oEvent) {
      var sSelectedKey = oEvent.getParameter("selectedItem").getKey();
      this._updateRowHeaders(sSelectedKey);
  },

    onRowHeaderFilterTypeChange: function (oEvent) {
      var oModel = this.getView().getModel();
      var aSelectedKeys = this.byId("rowHeaderFilterTypes").getSelectedKeys();
      var byPeople = oModel.getProperty("/filterBy");
      if (byPeople === 'person')
        {
          var cloneByPerson = oModel.getProperty('/Clone');
          var dataByPerson = structuredClone(cloneByPerson);
          //var dataByPerson = oModel.getData().people;
          //dataByPerson = cloneByPerson;
          Object.keys(dataByPerson).forEach(function (key) {
            var oPersonData = dataByPerson[key];
        
            // Check if appointments exist
            if (oPersonData && oPersonData.appointments) {
                var oAppointments = oPersonData.appointments;
        
                // Loop through each appointment in appointments
                Object.keys(oAppointments).forEach(function (appointmentKey) {
                    var oAppointment = oAppointments[appointmentKey];
                    var v_flag = '';
                    aSelectedKeys.forEach(function (key) {
                      if ((oAppointment.code === key)) {
                        v_flag = 'X';
                      }
                    });
                    if (v_flag === ''){
                      delete oAppointments[appointmentKey];
                    }
                });
            }
          });
          oModel.setProperty("/filteredRows", dataByPerson);
        }
  },

  _updateRowHeaders: function (sKey) {
      var oModel = this.getView().getModel();
      var byPeople = oModel.getProperty("/people");
      var byType = oModel.getProperty("/peopleByType");
// Update the model with the filtered rows
      if (sKey === 'person'){
        oModel.setProperty("/filteredRows", byPeople);
        oModel.setProperty("/filterBy", sKey);
        oModel.setProperty("/Clone", byPeople);
        this.enableDropdown();

        //Reset the TYPES back to SELECT ALL when back in Person view
        var oMultiComboBox = this.byId("rowHeaderFilterTypes");
        var aItems = oModel.getProperty("/filterstype");
    
        // Extract keys from the items and set them as selected keys
        var aKeys = aItems.map(function (item) {
            return item.key;
        });
        oMultiComboBox.setSelectedKeys(aKeys);

      }
      else if (sKey === 'type') {
        oModel.setProperty("/filteredRows", byType);
        oModel.setProperty("/filterBy", sKey);
        oModel.setProperty("/Clone", byType);
        this.disableAndResetDropdown();
      }
   },

  enableDropdown: function () {
    var oDropdown = this.byId("PlanningCalendarTeamSelect");
    oDropdown.setEnabled(true);
    var oDropdown = this.byId("rowHeaderFilterTypes");
    oDropdown.setEnabled(true);
   },

  disableAndResetDropdown: function () {
    var oDropdown = this.byId("PlanningCalendarTeamSelect");
    oDropdown.setEnabled(false);
    oDropdown.setSelectedKey("Team");
    var oDropdown = this.byId("rowHeaderFilterTypes");
    oDropdown.setEnabled(false);
    //oDropdown.setSelectedKey("Team");
    },

    _getLastSaturday: function () {
      const today = new Date();
      const dayOfWeek = today.getDay();
      const lastSaturday = new Date(today);
      // Subtract days to get the last Saturday
      const daysSinceSaturday = (dayOfWeek === 6) ? 0 : dayOfWeek + 1;
      lastSaturday.setDate(today.getDate() - daysSinceSaturday);
      // Set time to midnight
      lastSaturday.setHours(0, 0, 0, 0);
      return lastSaturday;
    },

		openLegend: function(oEvent) {
			var oSource = oEvent.getSource(),
				oView = this.getView();
			if (!this._pLegendPopover) {
				this._pLegendPopover = Fragment.load({
					id: oView.getId(),
					name: "com.sap.timesheet.view.Legend",
					controller: this
				}).then(function(oLegendPopover){
					oView.addDependent(oLegendPopover);
					return oLegendPopover;
				});
			}
			this._pLegendPopover.then(function(oLegendPopover){
				if (oLegendPopover.isOpen()) {
					oLegendPopover.close();
				} else {
					oLegendPopover.openBy(oSource);
				}
			});
		},
    
    onDownloadCalendarToExcel: function () {
      // Get a reference to the PlanningCalendar
      var oPlanningCalendar = this.byId("PC1");
      var oRows = oPlanningCalendar.getRows();
      var aData = [];

      // Format date for Excel export
      var oDateFormat = DateFormat.getDateTimeInstance({
          pattern: "yyyy-MM-dd HH:mm:ss"
      });

      // Loop through each row (each person/resource) in the calendar
      oRows.forEach(function (oRow) {
          var sRowHeader = oRow.getTitle();
          var aAppointments = oRow.getAppointments();

          // Loop through each appointment in the row
          aAppointments.forEach(function (oAppointment) {
              var oStartDate = oAppointment.getStartDate();
              var oEndDate = oAppointment.getEndDate();

              // Add appointment data to the array
              aData.push({
                  "Person": sRowHeader,
                  "Title": oAppointment.getTitle(),
                  "Start Date": oDateFormat.format(oStartDate),
                  "End Date": oDateFormat.format(oEndDate),
                  //"Location": oAppointment.getLocation(),
                  "Description": oAppointment.getText()
              });
          });
      });

      // Create a worksheet from the data array
      var oWorksheet = XLSX.utils.json_to_sheet(aData);

      // Create a new workbook and append the worksheet
      var oWorkbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(oWorkbook, oWorksheet, "Planning Calendar");

      // Generate Excel file and prompt download
      XLSX.writeFile(oWorkbook, "PlanningCalendar.xlsx");
    }
  });
});
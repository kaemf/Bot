export type UserScriptState =
  | "WaitingForName"
  | "ChoosingCourses"
  | "AdditionalQuestions"
  | "AnswerForAdditionalQuestions"
  | "HaveAdditionalQuestion"
  | "WaitingForPayment"
  | "AskingForPhoneNumber"
  | "FunctionRoot"
  | "GraphicRespondAndLevelRequest"
  | "LevelRespondAndRequestQuestions"
  | "EndRootManager"
  | "GetQuestionsAndSendData"
  | "RespondPacketAndGetPayment"
  | "RespondPaymentAndSendData"
  | "_GraphicRespondAndLevelRequest"
  | "_LevelRespondAndRequestQuestions"
  | "_GetQuestionsAndSendData"
  | "TrialLessonQuestionsManager"
  | "RespondCourseAndGetPacket"
  | "ActionClubRespondAndRootAction"
  | "RespondChooseAndRespondGetLesson"
  | "RespondCheckLessonsAndGetLessons"
  | "RespondTypePacketAndGetPayment"
  | "RespondPaymentAndGetCourseOrFinal"
  | "RespondCourseAndGetMail"
  | "RespondMailAndFinal"
  | "RespondAdminActionAndRootChoose"
  | "ADD_RespondTitleAndGetTeacher"
  | "ADD_RespondTeacherAndGetDate"
  | "ADD_RespondDateAndGetTime"
  | "ADD_RespondTimeAndGetCount"
  | "ADD_RespondCountAndGetLink"
  | "ADD_RespondLinkAndCheckRight"
  | "ADD_CheckHandlerAndRoot"
  | "DeleteClubAndCheckAction"
  | "CheckingActionDeleteAndReturn"
  | "RespondKeyDataAndGetChanges"
  | "GetChangesAndChangeThis"
  | "ChangeThisAndCheckThis"
  | "PeronalStudentHandler"
  | "AddLessonForStudent"
  | "CheckAvaibleActivePacketAndChangeCountLesson"
  | "DeleteStudentAndCheckAction"
  | "DeleteStudentHandlerAndReturn"
  | "RespondTrialClubAndCheckPayment"
  | "CheckPaymentAndReturn"
  | "GetClubToRegistrationAndCheckPayment"
  | "RegistrationChooseHandlerPayment"
  | "AdminRootHandler"
  | "RespondUserToActionAndGetRole"
  | "RespondRoleAndReturn"
  | "ADD_RespondDocumentationAndGetLink"
  | "ChangeThisDocAndCheckThis"
  | "IndividualHandler"
  | "ADD_RespondTimeHourAndGetMinute"
  | "ADD_RespondDateDayAndGetDateMonth"
  | "ADD_RespondDateMonthAndGetDateYear"
  | "ChangeDateDayAndGetChangeMonth"
  | "ChangeDateMonthAndGetChangeYear"
  | "ChangeDateYearAndSubmit"
  | "ChangeTimeHourAndGetChangeMinute"
  | "ChangeTimeMinuteAndSubmit"
  | "ChangeTeacherAndSubmit"
  | "ChangeUserNameAndProcessChange"
  | "ProcessChangeAndReturn"
  | "RespondIDAndShowCount&Packet"
  | "ResondIDAndForceChangeAvaibleLessons"
  | "ForceChangeAvaibleLessonsAndReturn"
  | "MyClubEmptyHandler"
  | "ChangeActivePacket_GetID"
  | "ChangeActivePacket_Handler"
  | "ChoosePacketHandlerCustomLesson"
  | "ChangeCountUserLessonsAndPacket"
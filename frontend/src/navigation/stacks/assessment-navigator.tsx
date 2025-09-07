import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroModal from "../../screens/student-dashboard/assessment/intro-modal";
// import CategoryModal from "../screens/assessment/CategoryModal";
// import QuestionsModal from "../screens/assessment/QuestionsModal";
// import ResultsModal from "../screens/assessment/ResultsModal";

export type SkillAssessmentStackParamList = {
  Intro: undefined;
  SkillAssessment: undefined;
  Categories: undefined;
  Questions: { category: string };
  Results: undefined;
};

const Stack = createNativeStackNavigator<SkillAssessmentStackParamList>();

export default function SkillAssessmentNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: "modal",
        headerShown: false,
      }}
    >
      <Stack.Screen name="Intro" component={IntroModal} />
      {/* <Stack.Screen name="Categories" component={CategoryModal} />
      <Stack.Screen name="Questions" component={QuestionsModal} />
      <Stack.Screen name="Results" component={ResultsModal} /> */}
    </Stack.Navigator>
  );
}

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

const PostOpportunityScreen: React.FC = () => {
  const [opportunityType, setOpportunityType] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [compType, setCompType] = useState("");
  const [currency, setCurrency] = useState("");
  const [remote, setRemote] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.formContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>Post an Opportunity</Text>

        <TextInput style={styles.input} placeholder="Opportunity Title" placeholderTextColor="#9ca3af" />
        <TextInput style={styles.input} placeholder="Organization Name" placeholderTextColor="#9ca3af" />

        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={opportunityType}
            onValueChange={(val) => setOpportunityType(val)}
            style={styles.picker}
          >
            <Picker.Item label="Opportunity Type" value="" />
            <Picker.Item label="Full-time" value="fulltime" />
            <Picker.Item label="Part-time" value="parttime" />
            <Picker.Item label="Internship" value="internship" />
          </Picker>
        </View>

        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={industry}
            onValueChange={(val) => setIndustry(val)}
            style={styles.picker}
          >
            <Picker.Item label="Industry" value="" />
            <Picker.Item label="Tech" value="tech" />
            <Picker.Item label="Finance" value="finance" />
          </Picker>
        </View>

        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={location}
            onValueChange={(val) => setLocation(val)}
            style={styles.picker}
          >
            <Picker.Item label="Location" value="" />
            <Picker.Item label="Remote" value="remote" />
            <Picker.Item label="On-site" value="onsite" />
          </Picker>
        </View>

        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Opportunity Description"
          placeholderTextColor="#9ca3af"
          multiline
        />
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Responsibilities"
          placeholderTextColor="#9ca3af"
          multiline
        />
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Requirements"
          placeholderTextColor="#9ca3af"
          multiline
        />
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Benefits"
          placeholderTextColor="#9ca3af"
          multiline
        />

        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={compType}
            onValueChange={(val) => setCompType(val)}
            style={styles.picker}
          >
            <Picker.Item label="Compensation Type" value="" />
            <Picker.Item label="Salary" value="salary" />
            <Picker.Item label="Hourly" value="hourly" />
          </Picker>
        </View>

        <TextInput style={styles.input} placeholder="Compensation Amount" placeholderTextColor="#9ca3af" />

        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={currency}
            onValueChange={(val) => setCurrency(val)}
            style={styles.picker}
          >
            <Picker.Item label="Currency" value="" />
            <Picker.Item label="USD" value="usd" />
            <Picker.Item label="NGN" value="ngn" />
          </Picker>
        </View>

        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={remote}
            onValueChange={(val) => setRemote(val)}
            style={styles.picker}
          >
            <Picker.Item label="Remote/On-site" value="" />
            <Picker.Item label="Remote" value="remote" />
            <Picker.Item label="On-site" value="onsite" />
            <Picker.Item label="Hybrid" value="hybrid" />
          </Picker>
        </View>

        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postButtonText}>Post Opportunity</Text>
        </TouchableOpacity>
      </ScrollView>

    </View>
  );
};

export default PostOpportunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f2a24",
  },
  formContainer: {
    flex: 1,
    padding: 16,
  },
  header: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#12332c",
    color: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  textarea: {
    height: 100,
    textAlignVertical: "top",
  },
  pickerWrapper: {
    backgroundColor: "#12332c",
    borderRadius: 8,
    marginBottom: 12,
  },
  picker: {
    color: "#9ca3af",
  },
  postButton: {
    backgroundColor: "#00f7d2",
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 30,
  },
  postButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#0b1e19",
    paddingVertical: 10,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 2,
  },
});

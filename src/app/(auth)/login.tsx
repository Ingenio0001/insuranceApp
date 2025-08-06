import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import MyCustomCheckbox from "../../components/checkbox";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, Redirect, useRouter } from "expo-router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const regex = /[^a-zA-Z]/;
  const router = useRouter();

  const [focusedField, setFocusedField] = useState(null);

  const emailChange = () => {
    setValidEmail(true);
  };
  const loginAuth = () => {
    // Use a more robust email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = regex.test(password) && password.length >= 8;

    if (isEmailValid && isPasswordValid) {
      // You would typically perform an API call here for authentication
      console.log("Authentication successful! Navigating to home.");
      router.replace("/home");
    } else {
      if (!isEmailValid) {
        setValidEmail(false);
      }
      if (!isPasswordValid) {
        setValidPassword(false);
      }
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../assets/logo.jpg")}
            style={{ width: 50, height: 50 }}
          />
          <Text style={{ fontSize: 25, fontWeight: "500", paddingTop: 25 }}>
            Log in
          </Text>
          <Text style={[styles.texts, { paddingTop: 15 }]}>
            Enter your password to log into your account
          </Text>
        </View>
        <View style={{ paddingTop: 29, paddingBottom: 23 }}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput
            placeholder="email@example.com"
            keyboardType="email-address"
            style={[
              styles.inputField,
              !validEmail && styles.incorrectField,
              focusedField === "email" && styles.focusedField,
            ]}
            placeholderTextColor={"#9a9a9a"}
            onChangeText={setEmail}
            value={email}
            onFocus={() => {
              setFocusedField("email");
              setValidEmail(true);
            }}
            onBlur={() => setFocusedField(null)}
          />
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            placeholder="*********"
            secureTextEntry={true}
            style={[
              styles.inputField,
              !validPassword && styles.incorrectField,
              focusedField === "password" && styles.focusedField,
            ]}
            placeholderTextColor={"#9a9a9a"}
            onChangeText={setPassword}
            value={password}
            onFocus={() => {
              setFocusedField("password");
              setValidPassword(true);
            }}
            onBlur={() => setFocusedField(null)}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 8,
            }}
          >
            <MyCustomCheckbox />
            <Link href="/login">
              <Text style={[styles.texts, { color: "#b28c5f" }]}>
                Forgot Password?
              </Text>
            </Link>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#f99621",
              padding: 16,
              borderRadius: 30,
              marginTop: 13,
            }}
            activeOpacity={0.7}
            onPress={loginAuth}
          >
            <Text
              style={{
                fontWeight: "700",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity activeOpacity={0.5}>
            <Image
              source={require("../../../assets/faceid.png")}
              style={{ width: 34, height: 34 }}
            />
          </TouchableOpacity>
          <Text style={[styles.texts, { paddingTop: 10 }]}>
            Tap to Use Face ID/ Touch ID
          </Text>
          <Text style={[styles.texts, { paddingTop: 65 }]}>
            In Need of help?{" "}
            <Link href="/login" style={{ color: "#b28c5f" }}>
              Help Center
            </Link>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
  },
  texts: {
    fontSize: 13,
    fontWeight: "700",
  },
  inputLabel: {
    color: "#4c4c4c",
    fontSize: 13,
    fontWeight: "600",
  },
  inputField: {
    padding: 17,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    color: "#9a9a9a",
    fontWeight: "600",
    // marginVertical: 13,
    marginTop: 9,
    marginBottom: 13,
  },
  incorrectField: {
    borderWidth: 1,
    borderColor: "red",
  },
  focusedField: {
    borderColor: "#b28c5f",
    borderWidth: 0.2,
  },
});

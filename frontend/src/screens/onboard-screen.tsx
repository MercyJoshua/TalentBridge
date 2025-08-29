// src/screens/OnboardingScreen.tsx
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, Dimensions, Pressable } from "react-native";
import { useTheme } from "../context/ThemeContext";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Unlock Global Opportunities",
    description:
      "TalentBridge connects students with global internships, offering Skill Passports and AI-powered matching.",
    image: require("../../assets/adaptive-icon.png"),
  },
  {
    id: "2",
    title: "Build Your Skill Passport",
    description: "Showcase your skills and achievements to stand out worldwide.",
    image: require("../../assets/favicon.png"),
  },
  {
    id: "3",
    title: "Smart Matching",
    description: "Get paired with internships that fit your goals.",
    image: require("../../assets/splash-icon.png"),
  },
];

type Props = {
  navigation: any;
  onDone: () => Promise<void> | void;
};

export default function OnboardingScreen({ navigation, onDone }: Props) {
    const { theme } = useTheme();
  const isDark = theme === "dark";

  const [index, setIndex] = useState(0);
  const ref = useRef<FlatList>(null);

  const handleScroll = (e: any) => {
    setIndex(Math.round(e.nativeEvent.contentOffset.x / width));
  };

  const next = () => {
    if (index === slides.length - 1) {
      Promise.resolve(onDone()).finally(() => navigation.replace("Auth"));
    } else {
      ref.current?.scrollToIndex({ index: index + 1 });
    }
  };

  return (
    <View style={[
        styles.container,
        { backgroundColor: isDark ? "#0B132B" : "#FAFAFA" },
      ]}>
      <FlatList
        ref={ref}
        data={slides}
        keyExtractor={(i) => i.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            <Image source={item.image} style={styles.image} />
            <Text style={[
          styles.title,
          { color: isDark ? "#EAEAEA" : "#4A4A4A" },
        ]} >{item.title}</Text>
            <Text style={[styles.desc, {color: isDark ? "#EAEAEA" : "#4A4A4A"}]}>{item.description}</Text>
          </View>
        )}
      />

      <View style={styles.dots}>
        {slides.map((_, i) => (
          <View key={i} style={[styles.dot, i === index && styles.dotActive]} />
        ))}
      </View>

      <Pressable style={styles.cta} onPress={next}>
        <Text style={styles.ctaText}>{index === slides.length - 1 ? "Get Started" : "Next"}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B132B", alignItems: "center" },
  slide: { alignItems: "center", justifyContent: "center", padding: 24 },
  image: { width: "78%", height: 240, marginTop: 48, marginBottom: 24, resizeMode: "contain" },
  title: { color: "#EAEAEA", fontSize: 22, fontWeight: "800", marginBottom: 8, textAlign: "center" },
  desc: { color: "#EAEAEA", opacity: 0.9, fontSize: 16, textAlign: "center", paddingHorizontal: 16 },
  dots: { flexDirection: "row", marginVertical: 16 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#4A4A4A", marginHorizontal: 4 },
  dotActive: { backgroundColor: "#00BFA6", width: 20 },
  cta: { backgroundColor: "#00BFA6", paddingVertical: 14, paddingHorizontal: 40, borderRadius: 28, marginBottom: 40 },
  ctaText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});

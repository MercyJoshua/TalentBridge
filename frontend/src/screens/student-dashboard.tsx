import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  TextInput,
  Dimensions,
  ListRenderItemInfo,
} from "react-native";
import { useTheme } from "../context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { Opp } from "../lib/commons/types";
import { mockOpportunitiesData } from "../lib/data";

const { width } = Dimensions.get("window");
const CARD_W = Math.min(220, Math.round(width * 0.48));
const CARD_IMG_H = Math.round(CARD_W * 0.6);
const TABBAR_PAD = 84;




const TAGS = ["Remote", "Travel", "Duration", "Paid"];

export default function StudentDashboard() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const colors = useMemo(() => ({
    background: isDark ? "#0B132B" : "#FAFAFA",
    text: isDark ? "#EAEAEA" : "#1C1C1C",
    subText: isDark ? "#9CA3AF" : "#4A4A4A",
    pillBg: isDark ? "#1C2541" : "#E5E7EB",
    pillText: isDark ? "#FFFFFF" : "#111827",
    icon: isDark ? "#EAEAEA" : "#1C1C1C",
    searchBg: isDark ? "#1C2541" : "#F3F4F6",
    searchBorder: isDark ? "#374151" : "#D1D5DB",
    searchPlaceholder: isDark ? "#6B7280" : "#9CA3AF",
    cardBg: "transparent",
  }), [isDark]);

  const renderChip = ({ item }: ListRenderItemInfo<string>) => (
    <Pressable
      style={[styles.filterPill, { backgroundColor: colors.pillBg }]}
      android_ripple={{ color: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)", borderless: false }}
    >
      <Text style={[styles.filterText, { color: colors.pillText }]}>{item}</Text>
    </Pressable>
  );

  const renderCard = ({ item }: ListRenderItemInfo<Opp>) => (
    <View style={[styles.card, { width: CARD_W, backgroundColor: colors.cardBg }]}>
      <Image source={item.image} style={[styles.cardImage, { width: "100%", height: CARD_IMG_H }]} resizeMode="cover" />
      <Text style={[styles.cardTitle, { color: colors.text }]} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={[styles.cardSubtitle, { color: colors.subText }]} numberOfLines={1}>
        {item.company} | {item.location}
      </Text>
    </View>
  );

  const renderListItem = ({ item }: ListRenderItemInfo<Opp>) => (
    <View style={styles.listItem}>
      <Image source={item.image} style={[styles.listImage, { width: Math.round(width * 0.16), height: Math.round(width * 0.16) }]} resizeMode="cover" />
      <View style={styles.listTextContainer}>
        <Text style={[styles.listTitle, { color: colors.text }]} numberOfLines={2}>{item.title}</Text>
        <Text style={[styles.listSubtitle, { color: colors.subText }]} numberOfLines={1}>
          {item.company} | {item.location}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.logo, { color: colors.text }]}>TalentBridge</Text>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color={colors.searchPlaceholder} style={styles.searchIcon} />
        <TextInput
          style={[
            styles.searchInput,
            { backgroundColor: colors.searchBg, borderColor: colors.searchBorder, color: colors.text },
          ]}
          placeholder="Search opportunities..."
          placeholderTextColor={colors.searchPlaceholder}
        />
      </View>

      {/* Chips */}
      <FlatList
        data={TAGS}
        keyExtractor={(t) => t}
        renderItem={renderChip}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipsContent}
        style={styles.chips}
      />

      {/* Recommended */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>Recommended for You</Text>
      <FlatList
        data={mockOpportunitiesData}
        keyExtractor={(it) => it.id}
        renderItem={renderCard}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 16, paddingBottom: 6 }}
        style={{ marginBottom: 8 }}
      />

      {/* All Opportunities */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>All Opportunities</Text>
      <FlatList
        data={mockOpportunitiesData}
        keyExtractor={(it) => it.id}
        renderItem={renderListItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: TABBAR_PAD }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 16, paddingHorizontal: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  logo: { fontSize: 18, fontWeight: "700" },

  // Search
  searchContainer: { flexDirection: "row", alignItems: "center", marginBottom: 14 },
  searchIcon: { position: "absolute", left: 12, zIndex: 1 },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 40,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 14,
  },

  // Chips
  chips: { marginBottom: 12 },
  chipsContent: { paddingRight: 16 },
  filterPill: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
    overflow: "hidden", 
  },
  filterText: { fontSize: 14 },

  // Cards
  card: {
    marginRight: 12,
    borderRadius: 10,
    paddingBottom: 10,          // ensures space for text
    minHeight: CARD_IMG_H + 44, // image + text area
  },
  cardImage: {
    borderRadius: 10,
    marginBottom: 8,            // gap between image and text
  },
  cardTitle: { fontWeight: "700", fontSize: 14, lineHeight: 18, marginBottom: 2 },
  cardSubtitle: { fontSize: 12, lineHeight: 16 },

  // List
  listItem: { flexDirection: "row", alignItems: "center", marginBottom: 16, paddingRight: 8 },
  listImage: { borderRadius: 10, marginRight: 12 },
  listTextContainer: { flex: 1 },
  listTitle: { fontWeight: "700", fontSize: 14, marginBottom: 2, lineHeight: 18 },
  listSubtitle: { fontSize: 12, lineHeight: 16 },

  sectionTitle: { fontSize: 16, fontWeight: "700", marginVertical: 10 },
});

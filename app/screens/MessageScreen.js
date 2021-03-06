import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists/Index";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Trevor",
    description: "Hey man! What's up?",
    image: require("../assets/avatars/man1.png"),
  },
  {
    id: 2,
    title: "Philip",
    description: "See you later!",
    image: require("../assets/avatars/man2.png"),
  },
  {
    id: 3,
    title: "Robbie",
    description:
      "Fugiat ad amet ullamco id occaecat minim. Consectetur commodo pariatur est excepteur deserunt elit do qui aute ea esse. Aute tempor officia eu et pariatur aliquip dolor sint exercitation est.",
    image: require("../assets/avatars/man3.png"),
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected.", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "Robbie",
              description: "Do you have the things that I gave u?",
              image: require("../assets/avatars/man3.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;

import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { AddTodo } from "./src/AddTodo";
import { Navbar } from "./src/Navbar";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: "Todos"},
    {id: 2, title: "Todos"},
    {id: 3, title: "Todos"},
    {id: 4, title: "Todos"},
    {id: 5, title: "Todos"},
    {id: 6, title: "Todos"},
    {id: 7, title: "Todos"},
    {id: 8, title: "Todos"},
    {id: 9, title: "Todos"},
    {id: 10, title: "Todos"},
    {id: 11, title: "Todos"},
    {id: 12, title: "Todos"},
    {id: 13, title: "Todos"},
  ])

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

    // setTodos((prevTodos) => {
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })

    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }])
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <ScrollView>
          {todos.map(todo => <Todo todo={todo} key={todo.id}/>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});

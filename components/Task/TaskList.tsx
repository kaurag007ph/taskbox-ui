import * as React from 'react';
import Task from './Task';
import LoadingRow from './../LoadingRow';
import { FlatList, Text, SafeAreaView, View } from 'react-native';
import { styles } from '../../constants/globalStyles';
import { FontAwesome5 } from '@expo/vector-icons';

export const TaskList: React.FC<any> = ({ loading, tasks, onPinTask, onArchiveTask }) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.ListItems}>
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
      </SafeAreaView>
    );
  }
  if (tasks.length === 0) {
    return (
      <SafeAreaView style={styles.ListItems}>
        <View style={styles.WrapperMessage}>
          <FontAwesome5 name="check" size={64} color={'#2cc5d2'} />
          <Text style={styles.TitleMessage}>You have no tasks</Text>
          <Text style={styles.SubtitleMessage}>Sit back and relax</Text>
        </View>
      </SafeAreaView>
    );
  }
  const tasksInOrder = [
    ...tasks.filter((t: any) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t: any) => t.state !== 'TASK_PINNED'),
  ];
  return (
    <SafeAreaView style={styles.ListItems}>
      <FlatList
        data={tasksInOrder}
        keyExtractor={task => task.id}
        renderItem={({ item }) => <Task key={item.id} task={item} {...events} />}
      />
    </SafeAreaView>
  );
}

export default TaskList;
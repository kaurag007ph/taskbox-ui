import * as React from 'react';
import { TextInput, SafeAreaView, View, TouchableOpacity, Platform } from 'react-native';
import { styles } from '../../constants/globalStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Task: React.FC<any> = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? '25px' : 0};
  background-color: #FFFFFF;
  margin-horizontal: 5px;
`;

// const Task: React.FC<any> = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {

//   return (
//     <SafeAreaView style={styles.ListItem}>
//       <TouchableOpacity onPress={() => onArchiveTask(id)}>
//         {state !== 'TASK_ARCHIVED' ? (
//           <View style={styles.CheckBox} />
//         ) : (
//           <FontAwesome5 name="check" size={20} color={'#2cc5d2'} />
//         )}
//       </TouchableOpacity>
//       <TextInput
//         placeholder="Input Title"
//         style={
//           state === 'TASK_ARCHIVED' ? styles.ListItemInputTaskArchived : styles.ListItemInputTask
//         }
//         value={title}
//         editable={false}
//       />
//       <TouchableOpacity onPress={() => onPinTask(id)}>
//         <FontAwesome5
//           name="star"
//           size={20}
//           color={state !== 'TASK_PINNED' ? '#eee' : '#26c6da'}
//         />
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// }

export default Task;
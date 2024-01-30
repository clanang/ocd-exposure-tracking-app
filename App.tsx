import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

type FormData = {
  date: Date; // or string, e.g., "2021-12-31"
  time: string; // e.g., "23:59:59"
  exposureExercise: string;
  safetyBehaviors: string;
  length: string;
  sudsStart: string;
  sudsPeak: string;
  sudsEnd: string;
  notes: string;
};

// viewable app interface
const App = () => {
  const [formData, setFormData] = useState<FormData>({
    date: '',
    time: '',
    exposureExercise: '',
    safetyBehaviors: '',
    length: '',
    sudsStart: '',
    sudsPeak: '',
    sudsEnd: '',
    notes: '',
  });

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  interface FormData {
    date: Date; // or string if you store dates in a different format
    time: string;
    exposureExercise: string;
    safetyBehaviors: string;
    length: string;
    sudsStart: string;
    sudsPeak: string;
    sudsEnd: string;
    notes: string;
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Exposure Tracking Form</Text>

      <View style={styles.formGroup}>
        <Text style={styles.formText}>Exposure exercise:</Text>
        <TextInput
          style={styles.input}
          value={formData.exposureExercise}
          onChangeText={value => handleChange('exposureExercise', value)}
        />
      </View>

      <View style={styles.formGroup}>
      <Text style={styles.formText}>Safety behaviors to aviod: </Text>
        <TextInput
          style={styles.input}
          value={formData.safetyBehaviors}
          onChangeText={value => handleChange('safetyBehaviors', value)}
        />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.fieldText}>Date:</Text>
          <Text style={styles.fieldText}>Time:</Text>
          <Text style={styles.fieldText}>Length:</Text>
          <Text style={styles.fieldText}>Beg:</Text>
          <Text style={styles.fieldText}>Peak:</Text>
          <Text style={styles.fieldText}>End:</Text>
        </View>
        <View style={styles.rightContainer}>
          <DatePicker />
          <TimePicker />
          <View style={styles.space}></View>
          <TextInput
          style={styles.input}
          value={formData.length}
          onChangeText={value => handleChange('length', value)
          }/>
          <View style={styles.space}></View>
          <TextInput
          style={styles.input}
          value={formData.sudsStart}
          onChangeText={value => handleChange('sudsStart', value)
          }/>
          <View style={styles.space}></View>
          <TextInput
          style={styles.input}
          value={formData.sudsPeak}
          onChangeText={value => handleChange('sudsPeak', value)
          }/>
          <View style={styles.space}></View>
          <TextInput
          style={styles.input}
          value={formData.sudsEnd}
          onChangeText={value => handleChange('sudsEnd', value)
          }/>
        </View>
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View> 
  );
};

const handleSubmit = () => {
  console.log(formData);
  // Process formData here (e.g., send to a server)
};

// date selector component
const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View style={[styles.text]}>
      <DateTimePicker
        testID="dateTimePicker"
        value={date} 
        mode="date"
        is24Hour={true}
        display="compact"
        onChange={onChange} // Handler to update the date when a user picks a new date
      />
    </View>
  );
};

// time selector component
const TimePicker = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View style={[styles.text]}>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode="time"
        is24Hour={true}
        display="compact"
        onChange={onChange} // Handler to update the date when a user picks a new date
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  formText: { 
    fontSize: 20, 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  mainContainer: {
    flexDirection: 'row',
    flex: 1,
    height: '50%',
  },
  leftContainer: {
    width: '30%', // Adjust as needed
    height: '100%', // Full height of mainContainer
    justifyContent: 'flex-start', // Vertically centers content in the container
    padding: 5,
  },
  rightContainer: {
    width: '50%', 
    height: '100%', // Full height of mainContainer
    justifyContent: 'flex-start', // Vertically centers content in the container
    alignItems: 'flex-start', // Aligns content to the start horizontally
  },
  tableContainer: { 
    padding: 1, 
    justifyContent: 'center',
    backgroundColor: '#fff' 
  },
  wrapper: { 
    flexDirection: 'row' 
  },
  headText: { 
    fontSize: 20, 
    fontWeight: 'bold' , 
    textAlign: 'center', 
    color: 'white' 
  },
  title: { 
    flex: 1, 
    backgroundColor: '#f6f8fa' 
  },
  text: { 
    margin: 6, 
    fontSize: 16, 
    fontWeight: 'bold' , 
    textAlign: 'center' 
  },
  fieldText: { 
    margin: 6, 
    fontSize: 20, 
    textAlign: 'center', 
    paddingBottom: 12,
  },
  space: { 
    paddingBottom: 8,
  },
});

export default App;

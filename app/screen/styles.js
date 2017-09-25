import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header:{
    flex: 1,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    backgroundColor: 'crimson',    
    justifyContent: 'center',
    paddingLeft: 10,
  },
  wrapper: {
    flex : 12,
  },
  text: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 20,
    fontWeight: '300',
  },
});

export default styles;

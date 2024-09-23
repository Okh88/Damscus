import { Image, StyleSheet, Platform, View, Text, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';

export default function HomeScreen() {

const [Counter, setCounter]= useStae (0);


  return (
   <View 
   style={{
    flex: 1,
     justifyContent: "center",
      alignItems: "center",
   }}
   >
    <Text>{ Counter }</Text>
    <Button
    onPress={ () => { setCounter (Counter + 1);
      if(Counter > 10) { setCounter (0);
       }
    } }
    title="Klick här"
    />
    <Button
    onPress={ () => { setCounter (Counter + 1);
      if(Counter > 10) { setCounter (0);
       }
    } }
    title="Klick här"
    />
   </View>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
function useStae(arg0: number): [any, any] {
  throw new Error('Function not implemented.');
}


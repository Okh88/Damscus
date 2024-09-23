import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Index() {
 const [counter, setCounter] = useState(0);
 const [mynumber, setMynumber] = useState("");
 const [errormessage, setErrormessage] = useState("abc");

 function dosomeplus() {
  const innumb = Number(mynumber);
  if(isNaN(innumb)){
    //Inte siffra
    setErrormessage("Du skriva fel");

  } else {
    setErrormessage("");
    setCounter(counter + innumb);
    if (counter > 10) {
      setCounter(0);
    }
  }
 }
 
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{ counter }</Text>
<TextInput onChangeText={setMynumber} 
           value={ mynumber } 
          style={{ borderWidth: 1, width: 100 }}  />
     <Button    
    onPress={ () => { setCounter (counter + 1);
      if(counter > 10) { setCounter (0);
       }
    } }
    title="Plus"
    />
    <Button
    onPress={ () => { setCounter (counter - 1);
      if(counter < 0) { setCounter (0);
       }
    } }

    title="Minus"
    />
      
    </View>
  );
}

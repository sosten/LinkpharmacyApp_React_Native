import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import SearchProduct from './Screens/SearchProduct';
import UploadePrescription from './Screens/UploadePrescription';
import Categories from './Screens/Categories';
import DrawerItems from './Constants/DrawerItems';
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import ToggleMenu from './Components/ToggleMenu';
   

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName='Home'
      drawerType="front"
      >
        {
          DrawerItems.map(drawer=><Drawer.Screen
            key={drawer.name}
            name={drawer.name}
            component= {
              drawer.name==="Home" ? HomeScreen
              : drawer.name==="Search" ? SearchProduct 
              : drawer.name==="Uploade Prescription" ? UploadePrescription
              : Categories
            }

            options={{
              drawerIcon: ({focused})=>
              drawer.iconType ==="AntDesign" ? 
                <AntDesign
                  name={drawer.iconName}
                  size={24}
                  color="black"
                />
              : drawer.iconType === "Feather" ?
                <EvilIcons
                  name={drawer.iconName}
                  size={24}
                  color="black" 
                />
              : drawer.iconType === "Fontisto" ?
                <Fontisto
                  name={drawer.iconName}
                  size={24}
                  color="black"
                 />
              : <AntDesign
                  name={drawer.iconName}
                  size={24}
                  color="black"
                />,

                headerShown: false,
                // header: ()=>{
                //   return(
                //     <ToggleMenu />
                //   )
                // }
            }}
          />)
        }
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

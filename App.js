import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Cadastro from './src/pages/cadastro';
import Dicas from './src/pages/dicas';
import Home from './src/pages/home';
import Inicio from './src/pages/inicio';
import Login from './src/pages/login';
import Dieta from './src/pages/dieta';
import Covid from './src/pages/covid';
import CuidadosBucais from './src/pages/cuidadosBucais';
import Exercicio from './src/pages/exercicio';
import FiqueSabendo from './src/pages/fiqueSabendo';
import Exames from './src/pages/exames';
import Consultas from './src/pages/consultas';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import IconCalendar from 'react-native-vector-icons/FontAwesome'
import IconMedical from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './src/pages/splash';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Tabs() {
  return(
      <Tab.Navigator
        initialRouteName={'Home'}
        tabBarOptions={{
          style:{backgroundColor: '#FF6D6D'},
          activeTintColor: '#FFF', inactiveTintColor: 'rgba(255,255,255,0.3)',
          labelStyle: {
            fontSize: 18,
          },
        }}>
          <Tab.Screen name="Exames" component={Exames} 
          options={{
          tabBarLabel: 'Exames',
          tabBarIcon: ({ color }) => (
            <IconMedical name="briefcase-medical" color={color} size={22}/>
          ),
        }}/>
          <Tab.Screen name="Home" component={Home} 
          options={{tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <View style={{marginBottom:20, width:80, height:80, backgroundColor:'white', borderRadius:50, justifyContent: 'center', alignItems: 'center'}}>
              <IconCalendar name="home" color={'#FF6D6D'} size={50}/>
            </View>
          ),
        }}/>
        <Tab.Screen name="Consultas" component={Consultas} 
          options={{
          tabBarLabel: 'Consultas',
          tabBarIcon: ({ color }) => (
            <IconCalendar name="calendar" color={color} size={22}/>
          ),
        }}/>
      </Tab.Navigator>
  )
}

export default function App({navigation}) {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen name="inicio" component={Inicio} options={{headerShown: false}}/>
        <Stack.Screen name="splash" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="cadastro" component={Cadastro} options={{headerShown: false}}/>
        <Stack.Screen name="dicas" component={Dicas} options={{headerShown: false}}/>
        <Stack.Screen name="home" component={Tabs}
          options={{
            headerTitle:'Seja bem vindo(a)!',
            headerStyle:{
              backgroundColor: '#FF6D6D', 
            },
            headerTitleStyle: { 
              color:'#FFF',
            },
            headerLeft:() => {},
            headerRight: () => 
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                  <Icon name='logout' size={20} style={{marginRight:15, color:'#FFF'}}/>
                </TouchableOpacity>
              </View>
            }
          }
         />
        <Stack.Screen name="dieta" component={Dieta}
          options={{
            headerTitle:'Seja bem vindo(a)!',
            headerStyle:{
              backgroundColor: '#FF6D6D', 
            },
            headerTintColor: '#fff',
            headerTitleStyle: { 
              color:'#FFF',
            },
            headerRight: () => 
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                  <Icon name='logout' size={20} style={{marginRight:15, color:'#FFF'}}/>
                </TouchableOpacity>
              </View>
            }
          }
         />
        <Stack.Screen name="exercicio" component={Exercicio}
          options={{
            headerTitle:'Seja bem vindo(a)!',
            headerStyle:{
              backgroundColor: '#FF6D6D', 
            },
            headerTintColor: '#fff',
            headerTitleStyle: { 
              color:'#FFF',
            },
            headerRight: () => 
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                  <Icon name='logout' size={20} style={{marginRight:15, color:'#FFF'}}/>
                </TouchableOpacity>
              </View>
            }
          }
         />
        <Stack.Screen name="covid" component={Covid}
          options={{
            headerTitle:'Seja bem vindo(a)!',
            headerStyle:{
              backgroundColor: '#FF6D6D', 
            },
            headerTintColor: '#fff',
            headerTitleStyle: { 
              color:'#FFF',
            },
            headerRight: () => 
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                  <Icon name='logout' size={20} style={{marginRight:15, color:'#FFF'}}/>
                </TouchableOpacity>
              </View>
            }
          }
         />
        <Stack.Screen name="cuidadosBucais" component={CuidadosBucais}
          options={{
            headerTitle:'Seja bem vindo(a)!',
            headerStyle:{
              backgroundColor: '#FF6D6D', 
            },
            headerTintColor: '#fff',
            headerTitleStyle: { 
              color:'#FFF',
            },
            headerRight: () => 
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                  <Icon name='logout' size={20} style={{marginRight:15, color:'#FFF'}}/>
                </TouchableOpacity>
              </View>
            }
          }
         />
        <Stack.Screen name="fiqueSabendo" component={FiqueSabendo}
          options={{
            headerTitle:'Seja bem vindo(a)!',
            headerStyle:{
              backgroundColor: '#FF6D6D', 
            },
            headerTintColor: '#fff',
            headerTitleStyle: { 
              color:'#FFF',
            },
            headerRight: () => 
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity>
                  <Icon name='logout' size={20} style={{marginRight:15, color:'#FFF'}}/>
                </TouchableOpacity>
              </View>
            }
          }
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

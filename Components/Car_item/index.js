import React,{useState} from 'react'
import { View,Text, ImageBackground ,Image,TouchableOpacity,ScrollView} from 'react-native'
import styles from './style'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faCog,faToolbox,faFan, faKey, faLock, faUnlock} from '@fortawesome/free-solid-svg-icons'
import Menu from '../Menu/menu'

export default function index ()  {
    const [lock, setlock] = useState(false)

    // setLock when lock is clicked
    const onSetLock = () =>{
        
        lock === true?setlock(false):setlock(true)
    }
    return (
        <View style={styles.carContainer}>

            {/* image background */}
            <ImageBackground 
            source={require("../../assets/background.png")}
            style={styles.backgroundImage}
            />
            {/* header view */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faCog} size={24} style={styles.icons} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>NazMobile</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faToolbox} size={24} style={styles.icons} />
                </TouchableOpacity>
            </View>

           {/* battery section */}
           <View style={styles.battery_section}>
                <Image
                source={require('../../assets/battery.png')}
                style={styles.batteryImage}
                />

                <Text style={styles.batteryText}>
                150 mhi
           </Text>
           </View>

           {/* status */}
           <View style={styles.status}>
               <Text style={styles.statusText}>
                   Parked
               </Text>

           </View>
           
            <ScrollView>
           {/* cntrol icons */}
           <View style={styles.controls}>
                <View style={styles.controlButton}>
                    <TouchableOpacity>
                        <FontAwesomeIcon  icon={faFan} size={24} style={styles.icons} />
                    </TouchableOpacity>
                </View>
                <View style={styles.controlButton}>
                    <TouchableOpacity>
                    <FontAwesomeIcon icon={faKey} size={24} style={styles.icons} />
                </TouchableOpacity>
                </View>
                <View style={styles.controlButton}>
                <TouchableOpacity onPress={onSetLock}>
                    <FontAwesomeIcon icon={lock === true?faLock:faUnlock} size={24} style={styles.icons} />
                </TouchableOpacity>
                </View>
           </View>

           {/* menu */}
               <Menu/>
           </ScrollView>
        </View>  
    ) 
}

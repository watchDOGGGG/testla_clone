import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import styles from '../Car_item/style'
import {faMusic,faChevronRight} from '@fortawesome/free-solid-svg-icons'
import MenuStyles from './style'
import items from './item'

const menu = () => {
    return (
        <View style={MenuStyles.menuItem}>
            
            {/* menu row */}

            {
                items.map(menu => {
                    return(
                        <TouchableOpacity key={menu.id}>
                        <View style={MenuStyles.menuRow}>
                            <FontAwesomeIcon icon={menu.icon} size={24} style={styles.icons} />
                            <View style={MenuStyles.menuTextBox}>
                                <Text style={MenuStyles.menuText}>
                                    {menu.title}
                                </Text>
                                {
                                        menu?.subTitle &&(
                                            <Text style={MenuStyles.subTitle}>
                                                {menu.subTitle}
                                            </Text>
                                        )
                                    }

                                </View>

                                <FontAwesomeIcon icon={faChevronRight} size={24} style={MenuStyles.arrowIcon} />
                            </View>
                    </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}
export default menu
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const api = {
    url: process.env.EXPO_PUBLIC_API_URL,
    key: process.env.EXPO_PUBLIC_API_KEY,
    icons: process.env.EXPO_PUBLIC_ICONS_URL
}

export default function Weather(props) {
    const [temp, setTemp] = useState(0)
    const [desc, setDesc] = useState('')
    const [icon, setIcon] = useState('')

    useEffect(() => {
        const url = api.url + 
            'lat=' + props.latitude + 
            '&lon=' + props.longitude + 
            '&appid=' + api.key + 
            '&units=metric' 

        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setTemp(json.main.temp)
                setDesc(json.weather[0].description)
                setIcon(api.icons + json.weather[0].icon + '@2x.png')   
            })
            .catch(error => {
                setDesc('Error retrieving weather information')
                console.log(error)
            })
}, [])

return (
    <View style={styles.container}>
        {icon && <Image source={{uri: icon}} style={{width: 200, height: 200}} />
        }
        <Text style={styles.temp}>{temp}°C</Text>
        <Text style={styles.desc}>{desc}</Text>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#777',
        alignItems: 'center',
        justifyContent: 'up',
    },
    temp: {
        fontSize: 40,
    },
    desc: {
        fontSize: 40,
    },
})
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const images = [
  { src: require('../assets/splashList/m1.png'), id: '1', text: 'Imagem 1' },
  { src: require('../assets/splashList/m2.png'), id: '2', text: 'Imagem 2' },
  { src: require('../assets/splashList/m3.png'), id: '3', text: 'Imagem 3' },
];

export default function HorizontalList({ navigation }) {
  return (
    <FlatList
    showsHorizontalScrollIndicator={false}
      style={{ top: 180, left: 30 }}
      horizontal
      data={images}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('OutraTela')}>
          <View>
            <View
              style={{
                width: 233,
                height: 330,
                borderRadius: 20,
                right:20,
                resizeMode: 'contain',
                margin: 20,
                shadowColor: '#000',
                overflow: 'hidden',
              }}
            >
              <Image source={item.src} />
              <Text style={{position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: 8}}>{item.text}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({});
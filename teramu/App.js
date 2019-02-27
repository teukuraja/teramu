import React, { Component } from 'react';
import Player from './src/screens/contents/Player';

export const TRACKS = [
  {
    title: 'Sentimental Crisis',
    artist: 'halca',
    albumArtUrl: 'http://st.cdjapan.co.jp/pictures/l/14/33/VVCL-1396.jpg',
    audioUrl: 'http://api.teramuza.xyz/source/audio/teramu_halca_-_sentimental_crisis.mp4',
  },
  {
    title: 'Butterfly Knot',
    artist: 'Aimer',
    albumArtUrl: "https://i1.sndcdn.com/artworks-000215818901-qoqk1u-t500x500.jpg",
    audioUrl: 'http://api.teramuza.xyz/source/audio/teramu_aimer_-_butterfly_knot.mp4',
  },
  {
    title: 'Uchiage Hanabi',
    artist: 'DAOKO x Kenshi Yonezu',
    albumArtUrl: "http://st.cdjapan.co.jp/pictures/l/01/18/TFCC-89632.jpg",
    audioUrl: 'http://api.teramuza.xyz/source/audio/teramu_daoko_-_uchiage_hanabi.mkv',
  },
  {
    title: 'Kanade',
    artist: 'Sukima Switch',
    albumArtUrl: 'https://1.bp.blogspot.com/-5zMu2h4NZgs/Wk_cRkJ_3WI/AAAAAAAAXGs/e7Rlw-dN16YRHa27qfQqIypx8Q-pBWiIQCLcBGAs/s1600/sukima%2Bswitch%2Bkanade.jpg',
    audioUrl: 'http://api.teramuza.xyz/source/audio/teramu_sukima_switch_-_kanade.mp4',
  },
  {
    title: 'Orange',
    artist: '7!!',
    albumArtUrl: 'https://m.media-amazon.com/images/I/917aerT5ZgL._SS500_.jpg',
    audioUrl: 'http://api.teramuza.xyz/source/audio/teramu_7_-_orange.mp4',
  },
  {
    title: 'Aoi Shiori',
    artist: 'Galileo Galilei',
    albumArtUrl: 'https://images-na.ssl-images-amazon.com/images/I/41qVwSrJ1bL._SX355_.jpg',
    audioUrl: 'http://api.teramuza.xyz/source/audio/teramu_galileo_galilei_-_aoi_shiori.mp4',
  },
  {
    title: 'Half',
    artist: 'Ziyoou-vachi',
    albumArtUrl: 'https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2018/04/HALF_tsujo-copy.jpg',
    audioUrl: 'http://api.teramuza.xyz/source/audio/teramu_ziyoou_vachi_-_half.mkv',
  },
  {
    title: 'Last Scene',
    artist: 'Ikimonogakari',
    albumArtUrl: 'https://1.bp.blogspot.com/-7c-W5sDBOhA/V76wDyum_II/AAAAAAAAEu8/dHB8ijpWM64S-5UCtQzQOxLnmzbaS_78wCLcB/s1600/Cover.jpg',
    audioUrl: 'http://api.teramuza.xyz/source/audio/teramu_ikimonogakari_-_last_scene.mp4',
  },
  {
    title: 'Watashi no Koe',
    artist: 'Inori Minase',
    albumArtUrl: 'https://i1.sndcdn.com/artworks-000216587429-wz4b8f-t500x500.jpg',
    audioUrl: 'http://api.teramuza.xyz/source/audio/teramu_inori_minase_-_watashi_no_koe.MKV',
  },
  {
    title: 'Liebesleid',
    artist: 'Fritz Kreisler',
    albumArtUrl: 'https://m.media-amazon.com/images/I/81CF3NZgkYL._SS500_.jpg',
    audioUrl: 'http://api.teramuza.xyz/source/audio/teramu_kreisler_-_liebesleid.mp4',
  },
  {
    title: 'Secret Base ~Kimi ga Kureta Mono~',
    artist: 'Zone',
    albumArtUrl: 'https://i.ebayimg.com/images/g/mioAAOSwPK1ZQir-/s-l640.jpg',
    audioUrl: 'http://api.teramuza.xyz/source/audio/teramu_zone_-_secret_base_kimi_ga_kureta_mono.mkv',
  },
  {
    title: 'Ichiban no Takaramono',
    artist: 'LiSA',
    albumArtUrl: 'https://4.bp.blogspot.com/-MRmEv6Y3FRE/VqGVf5-3mWI/AAAAAAAADWk/Ym5AXuiM9ek/s1600/angel-beats-ichiban-no-takaramono-yui-final-ver.jpg',
    audioUrl: 'http://api.teramuza.xyz/source/audio/teramu_lisa_-_ichiban_no_takaramono.mkv',
  },
  {
    title: 'One more change, One more time',
    artist: 'Masayoshi Yamazaki',
    albumArtUrl: 'https://i.ytimg.com/vi/iUF4oSt1XjU/hqdefault.jpg',
    audioUrl: 'http://api.teramuza.xyz/source/audio/teramu_masayoshi_yamazaki_one_more_change_one_more_time.mkv',
  },
  {
    title: 'Himawari',
    artist: 'MR.Children',
    albumArtUrl: 'https://images-na.ssl-images-amazon.com/images/I/51%2B4yaqsrcL.jpg',
    audioUrl: 'http://api.teramuza.xyz/source/audio/teramu_mrchildren_-_himawari.mp4',
  },
  {
    title: 'Kirameki',
    artist: 'Wacci',
    albumArtUrl: 'http://st.cdjapan.co.jp/pictures/l/03/31/ESCL-4658.jpg',
    audioUrl: 'http://api.teramuza.xyz/source/audio/teramu_wacci_-_kirameki.mkv',
  },
  {
    title: 'Kanade',
    artist: 'Sora Amamiya',
    albumArtUrl: 'https://3.bp.blogspot.com/-d8CDrRw_Jl0/XGAaT33cIFI/AAAAAAAABLo/GcawK_bVibokyOUuq1MGs131rHWbWNcqgCLcBGAs/s1600/Cover20.jpg',
    audioUrl: 'http://api.teramuza.xyz/source/audio/teramu_sora_amamiya_-_kanade.mkv',
  },
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}






// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  * @lint-ignore-every XPLATJSCOPYRIGHT1
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

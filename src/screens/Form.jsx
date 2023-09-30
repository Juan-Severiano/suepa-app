import { SafeAreaView } from 'react-native-safe-area-context'
import { WebView } from 'react-native-webview';

export default props => {
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
        <WebView
          source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLScmDKR87f3tPFuG9mfTolOrW5_Qcbwo2P0tFp09A7BeZO-8_A/viewform?usp=sf_link' }}
          style={{ flex: 1 }}
        />
      </SafeAreaView>
  )
}

import { SafeAreaView } from 'react-native-safe-area-context'
import { WebView } from 'react-native-webview';

export default props => {
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
        <WebView
          source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSeVER1mBNxCgZY6Pv2fD9kvAhQr4HvGCtfh822eOsfELBy9pA/viewform?pli=1' }}
          style={{ flex: 1 }}
        />
      </SafeAreaView>
  )
}

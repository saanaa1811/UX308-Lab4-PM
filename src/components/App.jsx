import { SnowRemoval } from '../SnowRemoval.jsx';
import {Hello} from './Hello.jsx';
import SqftToAcres from "../SqftToAcres.jsx";
import MowTime from "../MowTime.jsx";
import AirQuality from "../AirQuality.jsx";
import YeeHa from "../YeeHa.jsx";
import Slope from "../Slope.jsx";
import {
  View,
} from 'react-native';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />
      <SqftToAcres />
      <MowTime />
      <AirQuality />
      <YeeHa />
      <Slope />
    </View>
  );
}
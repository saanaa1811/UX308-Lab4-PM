import {
    Text,
    View,
} from 'react-native';
import { snowRemoval } from "../SnowRemoval.js";

// input snowfall in cm
export function SnowRemoval({ cm }) {
    // processing
    let equipment = snowRemoval(cm);
    // output the equipment
    return (
        <view>
            <text>snowRemoval({cm}) returned {equipment}</text>
        </view>
    );
}




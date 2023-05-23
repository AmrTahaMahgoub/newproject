import React, {
    FC,
    memo,
    useState
} from 'react';
import {
    ViewProps
} from 'react-native';
import {
    Colors
} from '../../../styles';
import {
    scale
} from '../../../styles/dimensions';

import styles from './styles';
import { Button } from '../Button/Button';

const FavoriteButton: FC<ViewProps & {
    isFavorite?: boolean
}> = ({
    isFavorite, ...props
}) => {
        let [_isFavorite, setFavorite] = useState(isFavorite)
        const onFavorite = () => {
            setFavorite(!_isFavorite)
        }
        return (
            <Button
                onPress={onFavorite}
                containerStyle={[styles.container, props.style]}
                style={styles.button}
                icon="Bell"
                iconStyle={{
                    width: scale(50),
                    height: scale(26),
                    color: _isFavorite ? Colors.BLACK : undefined
                }}
            />

        )
    }

export default memo(FavoriteButton)

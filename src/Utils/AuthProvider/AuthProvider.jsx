import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { checkAuthorization } from '../../store/slices/auth';
import styles from "./AuthProvider.module.css";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const { initialLoading } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(checkAuthorization());
    }, [dispatch]);

    return initialLoading ? <Spin className={styles.loading} indicator={antIcon} /> : children
}

export default AuthProvider

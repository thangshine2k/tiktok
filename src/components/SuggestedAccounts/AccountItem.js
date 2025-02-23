import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

export const accountData = [
    {
        src: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/b9a5df7a5057de47cf7d72831a12854f~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=23846&refresh_token=4210d6747c2f95035401799d7b510431&x-expires=1740495600&x-signature=zpgIkZ%2B3FEGUT3ZNQQ8wRnagxM0%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474',
        nickname: 'Nguyễn Loan',
        name: 'loanbabycute',
    },
    {
        src: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/44ab356d8c4586d4e577d127b9139329~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=6432&refresh_token=251d7a7690a4405c995cc8a68b8c7370&x-expires=1740495600&x-signature=KZkGfXn%2FCsbQGindMnQnMejxDQ4%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474',
        nickname: 'Trà Đá Tarot',
        name: 'tradatarot',
    },
    {
        src: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7314678730554048545~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=64930&refresh_token=bf5a457450eeebd8506916aff825b999&x-expires=1740495600&x-signature=KfOjYC1sa%2FKB0DSEcRb0QvuJ5uY%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474',
        nickname: 'Sơn Hanma',
        name: 'sonhanma_scl',
    },
];

function AccountItem() {
    const renderPreview = (account) => (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview account={account} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            {accountData.map((account, index) => (
                <Tippy
                    key={index}
                    interactive
                    delay={[800, 0]}
                    offset={[-20, 0]}
                    placement="bottom"
                    render={renderPreview(account)}
                >
                    <div className={cx('account-item')}>
                        <img className={cx('avatar')} src={account.src} alt={account.name} />
                        <div className={cx('item-info')}>
                            <p className={cx('nickname')}>
                                <strong>{account.nickname}</strong>
                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            </p>
                            <p className={cx('name')}>{account.name}</p>
                        </div>
                    </div>
                </Tippy>
            ))}
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;

import React from 'react';
import { Link } from 'react-router';

import UserInfo from './components/userInfo';
import UserButtons from './components/userButtons';
import SiteName from './components/siteName';

import css from './style.css';

const MenuBtn = ({ link, title, iconId, active }) => (
    <Link to={link} className={css.menuBtn + ' ' + (active ? css.activeBtn : '')}>
        <i className={`fa fa-${iconId}`} />
        {' '}
        {title}
    </Link>
);

class Layout extends React.Component {
    getChildContext() {
        return {
            translation: this.props.translation
        }
    }
    
    static childContextTypes = {
        translation: React.PropTypes.object
    }

    render() {
        const { 
            header,
            content, 
            routes, 
            translation
        } = this.props;
        const key = routes[routes.length - 1].key;

        return (
            <div className={css.wrap}>
                <header className={css.sidebar}>
                    <UserInfo />
                    <div className={css.menu}>
                        <MenuBtn link="/" title={translation.documents} iconId="newspaper-o" active={key === 'documents'} />
                        <MenuBtn link="/files" title={translation.files} iconId="file-text" active={key === 'files'} />
                        <MenuBtn link="/people" title={translation.people} iconId="users" active={key === 'people'} />
                    </div>
                    <Link to="/" className={css.logo}>
                        <img src="/images/logo-white.png" className={css.img}/>
                    </Link>
                </header>
                <div className={css.content}>
                    <div className={css.header}>
                        <div className={css.left}>
                            <div className={css.communityName}>
                                <SiteName />
                            </div>
                        </div>
                        <div className={css.right}>
                            <UserButtons />
                        </div>
                    </div>
                    {content}
                </div>
            </div>
        );
    }
}

export default Layout;
import { Page } from '@geist-ui/core';
import Auth from "@components/auth";
import Header from "@components/header/header";
import PageSeo from '@components/page-seo';
import styles from '@styles/Home.module.css'

const SignUp = () => (
    <Page width="100%">
        <PageSeo title="Drift - Sign Up" />

        <Page.Header>
            <Header />
        </Page.Header>
        <Page.Content className={styles.main}>
            <Auth page="signup" />
        </Page.Content>
    </Page>
)

export default SignUp

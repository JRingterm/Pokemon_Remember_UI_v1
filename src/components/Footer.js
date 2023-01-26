import styles from "../css/layout.module.css"

function Footer() {
    return(
        <footer className={styles.footer}>
            <hr />
            <div>
                <p>제작자: 젤리젤링텀, 이메일: ghwns3712@naver.com</p>
            </div>
        </footer>
    )
}

export default Footer;
import styles from './page.module.scss'

export default function login() {
    return (
        <main id="main" className={`container ${styles.login}`}>
            <div className={styles.login__header}>
                <h3>Login</h3>
                <p>로그인을 하시겠습니까?</p>
            </div>
            <form action="/api/login" method="POST" className={styles.login__form}>
                <fieldset>
                    <legend className="blind">로그인 영역</legend>
                    <div className={styles.id}>
                        <label htmlFor="youId" className="required blind">아이디</label>
                        <input
                            type="text"
                            name="youId"
                            id="youId"
                            placeholder='아이디'
                        />
                    </div>
                    <div className={styles.pass}>
                        <label htmlFor="youPass" className="required blind">비밀번호</label>
                        <input
                            type="password"
                            name="youPass"
                            id="youPass"
                            placeholder='비밀번호'
                        />
                    </div>
                    <div className={styles.btn}>
                        <button
                            type="submit"
                            className="btn__style2 mt30"
                        >
                            LOGIN
                        </button>
                    </div>
                    <div className='snsLogin'>
                        <div className='google'>
                            <img src='' alt='google' />
                            <p>GOOGLE 로그인</p>
                        </div>
                    </div>
                </fieldset>
            </form>
        </main>
        )
}
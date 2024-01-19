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
                            required
                        />
                    </div>
                    <div className={styles.pass}>
                        <label htmlFor="youPass" className="required blind">비밀번호</label>
                        <input
                            type="password"
                            name="youPass"
                            id="youPass"
                            placeholder='비밀번호'
                            autoComplete="off"
                            required
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
                    <div className={styles.snsLogin}>
                        <button type='button' className='google'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                            <p>Google 로그인</p>
                        </button>
                        <button type='button' className={styles.github}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            <p>Github 로그인</p>
                        </button>
                        <button type='button' className='facebook'>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="14.2222in" height="14.2222in" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 14222 14222" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <defs>
                                <style type="text/css">{`.fil0 {fill:#1977F3;fillRule:nonzero} .fil1 {fill:#FEFEFE;fillRule:nonzero}`}</style>
                                </defs>
                                <g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path className="fil0" d="M14222 7111c0,-3927 -3184,-7111 -7111,-7111 -3927,0 -7111,3184 -7111,7111 0,3549 2600,6491 6000,7025l0 -4969 -1806 0 0 -2056 1806 0 0 -1567c0,-1782 1062,-2767 2686,-2767 778,0 1592,139 1592,139l0 1750 -897 0c-883,0 -1159,548 -1159,1111l0 1334 1972 0 -315 2056 -1657 0 0 4969c3400,-533 6000,-3475 6000,-7025z" /><path className="fil1" d="M9879 9167l315 -2056 -1972 0 0 -1334c0,-562 275,-1111 1159,-1111l897 0 0 -1750c0,0 -814,-139 -1592,-139 -1624,0 -2686,984 -2686,2767l0 1567 -1806 0 0 2056 1806 0 0 4969c362,57 733,86 1111,86 378,0 749,-30 1111,-86l0 -4969 1657 0z" /></g>
                            </svg>
                            <p>Facebook 로그인</p>
                        </button>
                    </div>
                </fieldset>
            </form>
        </main>
        )
}
import Link from 'next/link'

export default function List(){
    return(
        <div className="m_list">
            <div className="m_list-item">
                <div className="img">
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
                <h3 className="line-2">
                    타이틀이 들어갑니다.타이틀이 들어갑니다.타이틀이 들어갑니다.타이틀이 들어갑니다.타이틀이 들어갑니다.타이틀이 들어갑니다.타이틀이 들어갑니다.
                </h3>
                <p className="line-3">
                    내용이 들어갑니다. 내용이 들어갑니다.내용이 들어갑니다. 내용이 들어갑니다.내용이 들어갑니다. 내용이 들어갑니다.내용이 들어갑니다. 내용이 들어갑니다.내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다.내용이 들어갑니다. 내용이 들어갑니다.내용이 들어갑니다. 내용이 들어갑니다.내용이 들어갑니다. 내용이 들어갑니다.내용이 들어갑니다. 내용이 들어갑니다. 
                </p>
                <Link href="/">Read More</Link>
            </div>
        </div>
        )
}
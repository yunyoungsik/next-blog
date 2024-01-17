export default function page() {
    return (
        <main id="main" className="container">
            <div className="write__header">
                <h3>Write</h3>
                <p>글을 작성하시겠습니까?</p>
            </div>
            <form action="/api/post/write" method="POST" className='write__form'>
                <fieldset>
                    <legend className="blind">글쓰기 영역</legend>
                    <div className="cate">
                        <label htmlFor="youCate" className="required blind">카테고리</label>
                        <select>
                            <option>카테고리</option>
                            <option>공지사항</option>
                            <option>자유</option>
                        </select>
                    </div>
                    <div className="title">
                        <label htmlFor="youTitle" className="required blind">제목</label>
                        <input
                            type="text"
                            name="title"
                            id="youTitle"
                            placeholder='제목'
                        />
                    </div>
                    <div className="content">
                        <label htmlFor="youConts" className="required blind">글 내용</label>
                        <textarea
                            type="text"
                            name="content"
                            id="youConts"
                            placeholder='글 내용을 작성하세요!'
                        />
                    </div>
                    <div className="btn">
                        <button
                            type="submit"
                            className="btn__style2 mt30"
                            >
                            작성하기
                        </button>
                    </div>
                </fieldset>
            </form>
        </main>
        )
}
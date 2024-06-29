import React from 'react';

function SecondScreen() {
    return (
        <div className="w-full flex flex-col overflow-hidden">
            <div
                className={`relative h-screen flex flex-row justify-center opacity-90 text-white `}
            >
                <div className="absolute top-0 left-[110px] text-white z-20 h-20">
                    <div className="mt-4">
                        <p className="w-full max-w-[400px] text-5xl">
                            hyeongsun's
                        </p>
                        <p className="text-5xl">Front-End Developer</p>
                        <p className="text-[150px]">Portfolio</p>
                    </div>
                    <div>
                        <p>머물러 있지 않고 성장하는 개발자가 되고싶습니다.</p>
                        <p>
                            빠르게 변화하는 프론트엔드 기술을 새로 배워나가는
                            것을 좋아하며
                        </p>
                        <p>그만큼 성장하는 것에 기쁨을 느낍니다.</p>
                    </div>
                    <div className="mt-10 p-1 grid grid-cols-4 gap-4 border border-white w-full max-w-[1200px]">
                        <div>name : 라형선</div>
                        <div>phone : 010-7545-9171</div>
                        <div>
                            Git : https://github.com/rhsok?tab=repositories
                        </div>
                        <div>Blog : https://velog.io/@rhsok823/posts</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondScreen;

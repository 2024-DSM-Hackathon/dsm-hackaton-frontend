import { StarIcon } from "@/assets/star";

export default function Company() {
  return (
    <div className="flex flex-col items-center w-full gap-8 pb-10">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between w-[70vw] mt-20">
          <div className="flex items-center gap-4">
            <div className="w-[100px] h-[100px] bg-gray-400 rounded-2xl"></div>
            <div className="flex flex-col ">
              <div className="flex items-center gap-1 text-3xl font-bold">
                주식회사 인프랩
              </div>
              <p>사업자 등록 번호 : 499-81-00612</p>
              <p>
                가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <StarIcon size={40} fill="#3AB968" />
              <p className="text-3xl font-bold">4.2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[70vw] gap-2">
        <p className="text-xl font-bold">전체 리뷰 통계</p>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-3 p-3 border-2 rounded-lg">
            <div className="flex gap-3">
              <p className="w-20">급여</p>
              <div className="w-[300px] bg-gray-300 h-5 rounded-md">
                <div className="w-[20%] bg-primary h-5 rounded-md transition-all"></div>
              </div>
            </div>
            <div className="flex gap-3">
              <p className="w-20">워라벨</p>
              <div className="w-[300px] bg-gray-300 h-5 rounded-md">
                <div className="w-[40%] bg-primary h-5 rounded-md transition-all"></div>
              </div>
            </div>
            <div className="flex gap-3">
              <p className="w-20">근무환경</p>
              <div className="w-[300px] bg-gray-300 h-5 rounded-md">
                <div className="w-[60%] bg-primary h-5 rounded-md transition-all"></div>
              </div>
            </div>
            <div className="flex gap-3">
              <p className="w-20">직장문화</p>
              <div className="w-[300px] bg-gray-300 h-5 rounded-md">
                <div className="w-[80%] bg-primary h-5 rounded-md transition-all"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[70vw] gap-2">
        <p className="text-xl font-bold">상세 리뷰</p>
        <div className="flex flex-col gap-4 p-3 border-2 rounded-lg">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <StarIcon fill="#3AB968" />
                <p className="font-bold">4.5</p>
              </div>
              <p className="pb-2 border-b-2 ml-7">데이터 4년차 - 현직원</p>
            </div>
            <p className="ml-7">
              이 회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이
              회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이
              회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이
              회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이
              회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이
              회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이
              회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구
            </p>
          </div>
          <div className="ml-7">
            <details>
              <summary>세부 내용</summary>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1 p-3 border-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <p className="font-bold">급여</p>
                    <div className="flex items-center gap-1">
                      <StarIcon size={20} />
                      <p>2.4</p>
                    </div>
                  </div>
                  <hr />
                  <p>
                    급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구
                    저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구급여는
                    어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구
                    저쩌구급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는
                    어쩌구 저쩌구급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구
                    급여는 어쩌구 저쩌구급여는 어쩌구 저쩌구
                  </p>
                </div>
                <div className="flex flex-col gap-1 p-3 border-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <p className="font-bold">워라벨</p>
                    <div className="flex items-center gap-1">
                      <StarIcon size={20} />
                      <p>2.4</p>
                    </div>
                  </div>
                  <hr />
                  <p>
                    급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구
                    저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구급여는
                    어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구
                    저쩌구급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는
                    어쩌구 저쩌구급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구
                    급여는 어쩌구 저쩌구급여는 어쩌구 저쩌구
                  </p>
                </div>
                <div className="flex flex-col gap-1 p-3 border-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <p className="font-bold">근무환경</p>
                    <div className="flex items-center gap-1">
                      <StarIcon size={20} />
                      <p>2.4</p>
                    </div>
                  </div>
                  <hr />
                  <p>
                    급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구
                    저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구급여는
                    어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구
                    저쩌구급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는
                    어쩌구 저쩌구급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구
                    급여는 어쩌구 저쩌구급여는 어쩌구 저쩌구
                  </p>
                </div>
                <div className="flex flex-col gap-1 p-3 border-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <p className="font-bold">직장문화</p>
                    <div className="flex items-center gap-1">
                      <StarIcon size={20} />
                      <p>2.4</p>
                    </div>
                  </div>
                  <hr />
                  <p>
                    급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구
                    저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구급여는
                    어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구
                    저쩌구급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는
                    어쩌구 저쩌구급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구
                    급여는 어쩌구 저쩌구급여는 어쩌구 저쩌구
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-3 border-2 rounded-lg">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <StarIcon fill="#3AB968" />
                <p className="font-bold">4.5</p>
              </div>
              <p className="pb-2 border-b-2 ml-7">데이터 4년차 - 현직원</p>
            </div>
            <p className="ml-7">
              이 회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이
              회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이
              회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이
              회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이
              회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이
              회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이
              회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구이 회사 어쩌구 저쩌구
            </p>
          </div>
          <div className="ml-7">
            <details>
              <summary>세부 내용</summary>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1 p-3 border-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <p className="font-bold">급여</p>
                    <div className="flex items-center gap-1">
                      <StarIcon size={20} />
                      <p>2.4</p>
                    </div>
                  </div>
                  <hr />
                  <p>
                    급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구
                    저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구급여는
                    어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구
                    저쩌구급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는
                    어쩌구 저쩌구급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구
                    급여는 어쩌구 저쩌구급여는 어쩌구 저쩌구
                  </p>
                </div>
                <div className="flex flex-col gap-1 p-3 border-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <p className="font-bold">워라벨</p>
                    <div className="flex items-center gap-1">
                      <StarIcon size={20} />
                      <p>2.4</p>
                    </div>
                  </div>
                  <hr />
                  <p>
                    급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구
                    저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구급여는
                    어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구
                    저쩌구급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는
                    어쩌구 저쩌구급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구
                    급여는 어쩌구 저쩌구급여는 어쩌구 저쩌구
                  </p>
                </div>
                <div className="flex flex-col gap-1 p-3 border-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <p className="font-bold">근무환경</p>
                    <div className="flex items-center gap-1">
                      <StarIcon size={20} />
                      <p>2.4</p>
                    </div>
                  </div>
                  <hr />
                  <p>
                    급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구
                    저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구급여는
                    어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구
                    저쩌구급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는
                    어쩌구 저쩌구급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구
                    급여는 어쩌구 저쩌구급여는 어쩌구 저쩌구
                  </p>
                </div>
                <div className="flex flex-col gap-1 p-3 border-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <p className="font-bold">직장문화</p>
                    <div className="flex items-center gap-1">
                      <StarIcon size={20} />
                      <p>2.4</p>
                    </div>
                  </div>
                  <hr />
                  <p>
                    급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구
                    저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구급여는
                    어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는 어쩌구
                    저쩌구급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구 급여는
                    어쩌구 저쩌구급여는 어쩌구 저쩌구 급여는 어쩌구 저쩌구
                    급여는 어쩌구 저쩌구급여는 어쩌구 저쩌구
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { companyAnswerApi, companyInfoApi } from "@/api/companyInfo";
import { StarIcon } from "@/assets/star";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect } from "react";

export default function Company() {
  const { data: companyInfo, isSuccess } = useQuery({
    queryKey: ["companyInfoApi"],
    queryFn: companyInfoApi,
  });

  const { data: reviewInfo, refetch } = useQuery({
    queryKey: ["companyAnswerApi"],
    queryFn: () => companyAnswerApi({ id: companyInfo.company_id }),
    enabled: false,
  });

  useEffect(() => {
    if (companyInfo && isSuccess) {
      refetch();
    }
  }, [companyInfo, isSuccess]);

  if (!companyInfo) return <p>loading</p>;

  return (
    <div className="flex flex-col items-center w-full gap-8 pb-10">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between w-[60vw] mt-20">
          <div className="flex items-center gap-4">
            <div className="relative overflow-hidden w-[100px] h-[100px] bg-gray-400 rounded-2xl">
              <Image fill src={companyInfo?.logo} />
            </div>
            <div className="flex flex-col ">
              <div className="flex items-center gap-1 text-3xl font-bold">
                {companyInfo?.company}
              </div>
              <p>사업자 등록 번호 : {companyInfo?.registration_number}</p>
              <p>{companyInfo?.info}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <StarIcon size={40} fill="#3AB968" />
              <p className="text-3xl font-bold">
                {companyInfo?.company_rating.toString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[60vw] gap-4">
        <p className="text-xl font-bold">전체 리뷰 통계</p>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-3 p-3 border-2 rounded-lg">
            {companyInfo?.rating_list.map((d) => (
              <div className="flex gap-3">
                <p className="w-24">{d.question}</p>
                <div className="w-[300px] bg-gray-300 h-5 rounded-md">
                  <div
                    className={` bg-primary h-5 rounded-md transition-all`}
                    style={{ width: `calc(${d.rate * 20}%)` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[60vw] gap-2">
        <p className="text-xl font-bold">상세 리뷰</p>
        {reviewInfo &&
          reviewInfo.answer_list.map((value) => (
            <div className="flex flex-col gap-4 p-3 border-2 rounded-lg">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2">
                      <StarIcon fill="#3AB968" />
                      <p className="font-bold">{value.rating}.0</p>
                    </div>
                    <p className="font-bold">{value.question}</p>
                  </div>
                  <p className="pb-2 border-b-2 ml-7">
                    {value.sector} {value.annual}년차 - {value.status}
                  </p>
                </div>
                <p className="ml-7">{value.answer}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

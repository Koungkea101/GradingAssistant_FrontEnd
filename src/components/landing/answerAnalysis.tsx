interface AnswerAnalysisProps {
  status: string;
  question: string;
  answer: string;
}

export default function AnswerAnalysis({ status, question, answer }: AnswerAnalysisProps) {
  return (
    <div className={`py-5 px-4 h-full gap-3 ${status === "CORRECT" ? "bg-[#F0FDF4] border-[#B9F8CF]" : "bg-[#FEF2F2] border-[#FFC9C9]"} flex flex-col  border-2 rounded-xl`}>
      {/* question */}
      <div className="w-full h-full flex justify-between text-black">
        <div>
          <p className="font-bold">QUESTION</p>
          <p className="text-[#364153]">{question}</p>
        </div>
        <div>
          <p className={`font-bold text-xl ${status === "CORRECT" ? "text-[#00A63E]" : "text-[#E7000B]"}`}>{status}</p>
        </div>
      </div>
      {/* answer */}
      <div className="w-full h-full px-2 py-2 bg-white rounded-lg">
        <p className="text-[#364153]">{answer}</p>
      </div>
    </div>
  );
}

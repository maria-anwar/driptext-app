import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { OnBoarding } from "../../Type/types";
import { useTranslation } from "react-i18next";

interface AccordionDataProps {
  speech: string;
  perspective: string;
  projectName: string;
  onBoarding: OnBoarding | undefined | null;
}
const AccordionData: React.FC<AccordionDataProps> = ({
  speech,
  perspective,
  projectName,
  onBoarding,
}) => {
  const { t,i18n } = useTranslation();
  const currentLanguage = i18n.language;
  if (currentLanguage === "de") {
    if (speech === "She") {
      speech = "Sie";
    } else if (speech === "You (capitalized)") {
      speech = "Du (groß geschrieben)";
    } else if (speech === "you (lowercase)") {
      speech = "du (klein geschrieben)";
    } else if (speech === "you (plural / informal)") {
      speech = "ihr/euch";
    } else if (speech === "Divers") {
      speech = "Divers";
    } else if (speech === "No direct address") {
      speech = "Keine direkte Ansprache";
    }
  }

  if (currentLanguage === "de") {
    if (perspective === "the company/the shop") {
      perspective = "die Firma/der Shop";
    } else if (perspective === "the editorial team") {
      perspective = "die Redaktion";
    } else if (perspective === "I") {
      perspective = "Ich";
    } else if (perspective === "Neutral") {
      perspective = "Neutral";
    } else if (perspective === "uniform, but generally irrelevant") {
      perspective = "einheitlich, aber grundsätzlich egal";
    } else if (perspective === "we/our shop/our company") {
      perspective = "wir/unser Shop/unser Unternehmen";
    } else if (perspective === "Divers") {
      perspective = "Divers"; // No change needed since it's the same in both languages
    }
  }
  return (
    <Accordion
      allowToggle
      className={`appearance-none border-none py-4 rounded `}
    >
      <AccordionItem
        className={`border-none bg-slate-100 dark:bg-meta-4 rounded`}
      >
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton className="flex justify-between items-center bg-slate-200 dark:bg-meta-4 rounded h-12 ">
                <p className="font-semibold text-black dark:text-white pt-4 ">
                  {t("task.taskModel.onBoardingInfo.onBoarding")}
                </p>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel className="" pb={4}>
              <div className="bg-white dark:bg-boxdark rounded py-2 px-4">
                <h2 className="text-black dark:text-white text-base font-semibold lg:mt-3 pb-3">
                  {t("task.taskModel.onBoardingInfo.generalInformation")}
                </h2>
                <div className="px-2">
                  <p className="dark:text-white font-medium ">{t("task.taskModel.onBoardingInfo.speech")}</p>
                  <p className="dark:text-white bg-slate-200 dark:bg-meta-4 py-2 px-4 mb-2 -mt-3 rounded">
                  {speech}
                  </p>
                </div>
                <div className="px-2">
                  <p className="dark:text-white font-medium pt-2">
                    {t("task.taskModel.onBoardingInfo.perspective")}
                  </p>
                  <p className="dark:text-white bg-slate-200 dark:bg-meta-4 py-2 px-4 mb-2  -mt-3 rounded">
                    {perspective}
                  </p>
                </div>
                <div className="px-2">
                  <p className="dark:text-white font-medium pt-2">
                    {" "}
                    {t("task.taskModel.onBoardingInfo.website")}
                  </p>
                  <p className="dark:text-white bg-slate-200 dark:bg-meta-4 py-2 px-4 mb-2  -mt-3 rounded">
                    {projectName}
                  </p>
                </div>
                <div className="w-full flex flex-col gap-2.5">
                  <h2 className="text-black dark:text-white text-base font-semibold lg:mt-3">
                    {t("task.taskModel.onBoardingInfo.companyInformation")}
                  </h2>
                  <div className="px-3">
                    <label className="text-black dark:text-white text-sm 3xl:text-[15px] font-medium pt-0">
                      {t("task.taskModel.onBoardingInfo.companyBackground")}
                    </label>
                    <p className="w-full bg-slate-200 placeholder:text-black/60 dark:placeholder:text-white/50 text-black dark:text-white border border-transparent text-sm px-3 xs:px-3 py-2 font-normal rounded focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary">
                      {onBoarding?.companyBackgorund}
                    </p>
                  </div>
                  <div className="px-3">
                    <label className="text-black dark:text-white text-sm 3xl:text-[15px] font-medium pt-0">
                      {t("task.taskModel.onBoardingInfo.companyAttributes")}
                    </label>
                    <p className="w-full bg-slate-200 placeholder:text-black/60 dark:placeholder:text-white/50 text-black dark:text-white border border-transparent text-sm px-3 xs:px-3 py-2 font-normal rounded focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary">
                      {onBoarding?.companyAttributes}
                    </p>
                  </div>
                  <div className="px-3">
                    <label className="text-black dark:text-white text-sm 3xl:text-[15px] font-medium pt-0">
                      {t("task.taskModel.onBoardingInfo.companyServices")}
                    </label>
                    <p className="w-full bg-slate-200 placeholder:text-black/60 dark:placeholder:text-white/50 text-black dark:text-white border border-transparent text-sm px-3 xs:px-3 py-2 font-normal rounded focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary">
                      {onBoarding?.comapnyServices}
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2.5">
                  <h2 className="text-black dark:text-white text-base font-semibold lg:mt-3">
                    {t(
                      "task.taskModel.onBoardingInfo.targetCustomerInformation"
                    )}
                  </h2>
                  <div className="px-3">
                    <label className="text-black dark:text-white text-sm 3xl:text-[15px] font-medium pt-0">
                      {t("task.taskModel.onBoardingInfo.contentTargetAudience")}
                    </label>
                    <p className="w-full bg-slate-200 placeholder:text-black/60 dark:placeholder:text-white/50 text-black dark:text-white border border-transparent text-sm px-3 xs:px-3 py-2 font-normal rounded focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary">
                      {onBoarding?.customerContent}
                    </p>
                  </div>
                  <div className="px-3">
                    <label className="text-black dark:text-white text-sm 3xl:text-[15px] font-medium pt-0">
                      {t("task.taskModel.onBoardingInfo.customerInterest")}
                    </label>
                    <p className="w-full bg-slate-200 placeholder:text-black/60 dark:placeholder:text-white/50 text-black dark:text-white border border-transparent text-sm px-3 xs:px-3 py-2 font-normal rounded focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary">
                      {onBoarding?.customerIntrest}
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2.5">
                  <h2 className="text-black dark:text-white text-base font-semibold lg:mt-3">
                    {t("task.taskModel.onBoardingInfo.contentAim")}
                  </h2>
                  <div className="px-3">
                    <label className="text-black dark:text-white text-sm 3xl:text-[15px] font-medium pt-0">
                      {t("task.taskModel.onBoardingInfo.contentPurpose")}
                    </label>
                    <p className="w-full bg-slate-200 placeholder:text-black/60 dark:placeholder:text-white/50 text-black dark:text-white border border-transparent text-sm px-3 xs:px-3 py-2 font-normal rounded focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary">
                      {onBoarding?.contentPurpose}
                    </p>
                  </div>
                  <div className="px-3 pb-6">
                    <label className="text-black dark:text-white text-sm 3xl:text-[15px] font-medium pt-0">
                      {t("task.taskModel.onBoardingInfo.brandAndContentInfo")}
                    </label>
                    <p className="w-full bg-slate-200 placeholder:text-black/60 dark:placeholder:text-white/50 text-black dark:text-white border border-transparent text-sm px-3 xs:px-3 py-2 font-normal rounded focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary">
                      {onBoarding?.contentInfo}
                    </p>
                  </div>
                </div>
              </div>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionData;

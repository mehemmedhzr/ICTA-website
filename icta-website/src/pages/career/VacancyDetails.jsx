import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CgSoftwareDownload } from "react-icons/cg";

const VacancyDetails = () => {
  const { id } = useParams();
  const [vakansiya, setVakansiya] = useState(null);

  useEffect(() => {
    fetch("/data/index.json")
      .then((res) => res.json())
      .then((data) => {
        const section = data.navigation.sections.find(
          (item) => item.title === "Karyera"
        );

        const subsection = section?.career_section?.find(
          (sub) => sub.title === "Mövcud vakansiyalar"
        );

        const foundVacancy = subsection?.vacancy_inside?.find(
          (vac) => String(vac.id) === id
        );

        setVakansiya(
          foundVacancy
            ? {
                ...foundVacancy,
                section: section?.title,
                subsection: subsection?.title,
              }
            : null
        );
      })
      .catch((err) => console.error("Xəta:", err));
  }, [id]);

  if (!vakansiya) return <p className="text-center mt-10">Yüklənir...</p>;

  return (
    <div className="max-w-[950px] mx-auto  mb-10 p-5">
      <div>
        <div className="text-sm py-2">
          <Link to="/" className="text-gray-500 hover:underline">
            Əsas
          </Link>
          <span className="mx-2 text-gray-500">›</span>
          <span className="text-gray-500">{vakansiya.section}</span>
          <span className="mx-2 text-gray-500">›</span>
          <span className="text-[#498efb] font-medium">Vakansiya haqqında</span>
        </div>
        <h2 className="text-2xl font-semibold text-[#498efb] mb-4">
          {vakansiya.title}
        </h2>
      </div>

      <div className="border border-gray-300 rounded-xl p-10">
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1 md:border-r border-gray-300 pr-10">
            {vakansiya.requirements && (
              <SectionBlock
                title="Namizədə olan tələblər:"
                list={vakansiya.requirements}
              />
            )}
            {vakansiya.responsibilities && (
              <SectionBlock
                title="Ümumi vəzifə öhdəlikləri:"
                list={vakansiya.responsibilities}
              />
            )}
            {vakansiya.conditions && (
              <SectionBlock title="İş şəraiti:" list={vakansiya.conditions} />
            )}
          </div>

          <div className="w-full sm:w-[200px] mt-6 sm:mt-0 sm:ml-8">
            <div className="flex flex-col gap-10 mt-5">
              <VacancyInfo
                icon="/svg/case.svg"
                label="Məşğulluq növü"
                value={vakansiya.job_type}
              />
              <VacancyInfo
                icon="/svg/square.svg"
                label="Təcrübə tələbi"
                value={vakansiya.experience}
              />
              <VacancyInfo
                icon="/svg/grad.svg"
                label="Təhsil"
                value={vakansiya.education}
              />
              <VacancyInfo
                icon="/svg/book.svg"
                label="Dil biliyi"
                value={vakansiya.languages?.join(", ")}
              />
              <VacancyInfo
                icon="/svg/comp.svg"
                label="Texniki biliklər"
                value={vakansiya.skills}
              />
              <VacancyInfo
                icon="/svg/case.svg"
                label="Əmək haqqı"
                value={vakansiya.salary}
              />
              <VacancyInfo
                icon="/svg/calendar.svg"
                label="Son müraciət tarixi"
                value={vakansiya.deadline}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#498efb] w-[280px] h-[50px] text-white px-6 py-3 cursor-pointer rounded-xs hover:bg-[#2d8cff] transition mt-6">
                Müraciət et
              </Button>
            </DialogTrigger>

            <DialogContent className="w-full max-w-lg">
              <DialogHeader>
                <DialogTitle>
                  Seçilmiş vakansiya üzrə müraciət forması
                </DialogTitle>
                <DialogDescription>
                  Müraciətiniz üçün öncədən təşəkkür edirik! Qısa zaman ərzində
                  sizə geri dönüş ediləcəkdir.
                </DialogDescription>
              </DialogHeader>

              <form className="grid gap-5 mt-10">
                <div className="flex flex-col md:flex-row gap-4">
                  <Input
                    name="name"
                    placeholder="Ad, Soyad"
                    className="w-full"
                  />
                  <Input
                    name="phone"
                    placeholder="Telefon nömrəsi"
                    type="tel"
                    required
                    className="w-full"
                  />
                </div>
                <Input
                  name="email"
                  placeholder="E-mail"
                  type="email"
                  required
                />
                <label
                  htmlFor="cv"
                  className="flex items-center justify-center gap-2 border border-dashed border-[#498efb] text-[#498efb] cursor-pointer rounded-xs py-4 hover:bg-[#f0f7ff] transition text-sm"
                >
                  <CgSoftwareDownload className="text-[18px]" />
                  <span className="font-medium">CV Yüklə</span>
                  <input
                    id="cv"
                    name="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    required
                  />
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  Faylın həcmi 3MB-dan çox olmamalıdır
                </p>

                <DialogFooter className="mt-2">
                  <Button
                    type="submit"
                    className="w-full !max-w-[290px] h-[50px] bg-[#498efb] text-white hover:bg-[#2d8cff] rounded-xs"
                  >
                    Təsdiqlə
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

const SectionBlock = ({ title, list }) => (
  <div className="mb-6 border-b border-gray-300 pb-6">
    <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const VacancyInfo = ({ icon, label, value }) => (
  <div className="flex gap-3">
    <img src={icon} alt="" className="w-[30px]" />
    <div>
      <p className="font-medium text-gray-700 mt-5">{label}</p>
      <p>{value}</p>
    </div>
  </div>
);

export default VacancyDetails;

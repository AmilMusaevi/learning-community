import Card from "@/components/card/card";
import editIcon from "@/assets/icons/Edit.svg";
import chatIcon from "@/assets/icons/chat.svg";
import starIcon from "@/assets/icons/Star.svg";
import infoImg from "@/assets/images/info-image.png";
import paperPlus from "@/assets/icons/paperPlus.svg";
import discoveryIcon from "@/assets/icons/discovery.svg";
import styles from "./info.module.scss";

const Info = () => {
    const infoData = [
        {
            id: "1",
            icon: starIcon,
            title: "SBMPTN",
            desc: "Seleksi bersama dalam penerimaan mahasiswa baru di lingkungan perguruan tinggi negeri ",
        },
        {
            id: "2",
            icon: discoveryIcon,
            title: "Pengetahuan Umum",
            desc: "pengetahuan yang diketahui oleh kebanyakan orang, biasanya berhubungan umum digunakan",
        },
        {
            id: "3",
            icon: editIcon,
            title: "Ujian Nasional",
            desc: "Sistem evaluasi standar pendidikan nasional antar daerah yang dilakukan oleh Pusat Penilaian ",
        },
        {
            id: "4",
            icon: paperPlus,
            title: "Teknologi Informasi",
            desc: "teknologi membantu manusia dalam membuat, mengubah, menyebarkan informasi.",
        },
    ];
    return (
        <div className={styles.info} id="info">
            <div className={styles.info_image}>
                <img
                    src={infoImg}
                    alt="Information image"
                    className={styles.info_image_profile}
                />
                <div className={styles.info_image_chat_icon}>
                    <img src={chatIcon} alt="Chat icon" />
                </div>
            </div>

            <div className={styles.info_cards}>
                <h2 className={styles.info_cards_title}>Temukan Kategori Pertanyaan yang Kamu Cari</h2>

                <div className={styles.info_cards_wrapper}>

                    {infoData.map((item) => (
                        <Card key={item?.id}>
                            <img src={item?.icon} alt="Card Icon" />
                            <h2>{item?.title}</h2>
                            <p>{item?.desc}</p>
                        </Card>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Info;

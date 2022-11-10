import React, { useCallback, useEffect, useState } from "react";
import "./form.css";
import { useTelegram } from "../../hooks/useTelegram";
const Form = () => {
    const [country, setCountry] = useState("");
    const [street, setStreet] = useState("");
    const [subject, setSubject] = useState("physical");

    const { tg } = useTelegram();

    const onSendData = useCallback(() => {
        tg.sendData(
            JSON.stringify({
                type: "formInfo",
                userInfo: {
                    country,
                    street,
                    subject,
                },
            })
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [country, street, subject]);
    useEffect(() => {
        tg.MainButton.setParams({
            text: "Отправить данные",
        });
        tg.onEvent("mainButtonClicked", onSendData);
        return () => {
            tg.offEvent("mainButtonClicked", onSendData);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onSendData]);

    useEffect(() => {
        if (!country || !street) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street, tg.MainButton]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    };

    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    };

    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    };

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={"input"}
                type="text"
                placeholder={"Страна"}
                onChange={onChangeCountry}
                value={country}
            />
            <input
                className={"input"}
                type="text"
                placeholder={"Улица"}
                onChange={onChangeStreet}
                value={street}
            />
            <select
                className={"select"}
                onChange={onChangeSubject}
                value={subject}
            >
                <option value="physical">Физ.лицо</option>
                <option value="legal">Юр.лицо</option>
            </select>
        </div>
    );
};

export default Form;

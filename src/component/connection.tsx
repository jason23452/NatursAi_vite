import Footer from "./footer";
import "../all_css/connection.css"

import React, { useState, useRef } from "react";



interface CustomSelectProps {
    options: string[];
    placeholder?: string;
    lablename?: string;
    onSelect: (value: string) => void; // 回调函数
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    options,
    placeholder = "Select an option",
    onSelect,
    lablename,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const selectRef = useRef<HTMLDivElement | null>(null);

    const handleToggle = (): void => {
        if (!isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        setIsOpen((prev) => !prev);
    };

    const handleOptionSelect = (option: string): void => {
        setSelectedOption(option);
        onSelect(option); // 调用回调函数
        setIsOpen(false);
        document.removeEventListener("mousedown", handleClickOutside);
    };

    const handleClickOutside = (event: MouseEvent): void => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsOpen(false);
            document.removeEventListener("mousedown", handleClickOutside);
        }
    };

    return (
        <div className="desktop_select_lable_container">
            <label><span className="desktop_connection_lable_text">{lablename}</span></label>
            <div className="desktop_select_container" ref={selectRef}>
                {/* Dropdown Button */}
                <button onClick={handleToggle} className="desktop_select">
                    <div className="desktop_select_text">
                        {selectedOption || placeholder}
                        <div className={`desktop_select_arrow ${isOpen ? "turn_180" : "turn_0"}`} /><div />
                    </div>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="desktop_select_option_container group">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                onClick={() => handleOptionSelect(option)}
                                className="desktop_select_option group-hover:text-white"
                            >
                                <span >{option}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};









const Connection: React.FC = () => {
    const [selectedInfo, setSelectedInfo] = useState<string>(""); // 存储 "信息内容"
    const [selectedIden, setSelectedIden] = useState<string>(""); // 存储 "您的身份"
    const [yourName, setYourName] = useState<string>(""); // 存储 "您的姓名"
    const [userEmail, setUserEmail] = useState<string>(""); // 存储 "您的信箱"
    const [suggestions, setSuggestions] = useState<string>(""); // 存储 "問題意見"
    const [isLoading, setIsLoading] = useState<boolean>(false); // 顯示提交狀態

    const handleSelectInformation = (value: string) => setSelectedInfo(value); // 更新 "信息内容"
    const handleSelectIdentity = (value: string) => setSelectedIden(value); // 更新 "您的身份"

    const validateForm = (): string | null => {
        // 定義表單字段及對應的錯誤消息
        const fields = [
            { value: selectedInfo, message: "請選擇信息內容！" },
            { value: selectedIden, message: "請選擇您的身份！" },
            { value: yourName.trim(), message: "請填寫您的姓名！" },
            { value: userEmail.trim(), message: "請填寫您的信箱！" },
            { value: suggestions.trim(), message: "請填寫問題意見！" },
        ];

        for (const field of fields) {
            if (!field.value) return field.message;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userEmail.trim())) return "請填寫正確的信箱格式！";
        return null;
    };

    const handleSubmit = async () => {
        const error = validateForm();
        if (error) {
            alert(error);
            return;
        }

        setIsLoading(true);
        const formData = {
            message: selectedInfo.trim(),
            issue: suggestions.trim(),
            email: userEmail.trim(),
            name: yourName.trim(),
            identity: selectedIden.trim(),
            subject: "用戶提交的表單",
        };

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                alert("表單提交成功！");
                setSelectedInfo("");
                setSelectedIden("");
                setYourName("");
                setUserEmail("");
                setSuggestions("");
            } else {
                alert(result.message || "提交失敗，請稍後再試！");
            }
        } catch (error) {
            console.error("提交表單時出錯:", error);
            alert("提交失敗，請檢查網路連線或稍後再試！");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="connection_container">
            <div className="desktop_connection_container">
                <div className="desktop_connection_logo"></div>
                <div className="desktop_connection_logo_text_container">
                    <span className="desktop_connection_text">
                        若您對 NatursAi 產品有任何疑問或需要進一步了解，請填寫下方聯絡表格。我們將盡快與您聯繫，並提供您所需的協助。
                    </span>
                </div>
                <div className="desktop_form_container">
                    <CustomSelect
                        options={["技術支援", "產品意見", "合作機會", "刪除帳號", "其他"]}
                        onSelect={handleSelectInformation}
                        lablename="信息內容"
                    />
                    <div className="mt_style_2"></div>
                    <CustomSelect
                        options={["夠益營養APP使用者", "照護人員", "醫護人員", "合作關係人", "其他"]}
                        onSelect={handleSelectIdentity}
                        lablename="您的身份"
                    />
                    <div className="desktop_input_lable">
                        <div>
                            <span className="desktop_connection_lable_text">姓名</span>
                            <p className="desktop_input_lable_start">*</p>
                        </div>
                        <div>
                            <span className="desktop_connection_lable_text">信箱</span>
                            <p className="desktop_input_lable_start">*</p>
                        </div>
                    </div>
                    <div className="desktop_input">
                        <input
                            id="your_name"
                            placeholder="您的姓名"
                            value={yourName}
                            onChange={(e) => setYourName(e.target.value)}
                        />
                        <input
                            type="email"
                            id="user_email"
                            placeholder="您的信箱"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                    </div>
                    <div className="desktop_input_lable_2">
                        <span className="desktop_connection_lable_text">問題意見</span>
                        <p className="desktop_input_lable_start">*</p>
                    </div>
                    <textarea
                        className="desktop_textarea"
                        id="Suggestions"
                        placeholder="請輸入問題意見"
                        value={suggestions}
                        onChange={(e) => setSuggestions(e.target.value)}
                    ></textarea>
                    <button
                        name="submit_button"
                        className="desktop_connection_submit_button"
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        <span>{isLoading ? "提交中..." : "提交"}</span>
                    </button>
                </div>
            </div>
            <div className="media_connection_container">
                <div className="media_connection_Naturs_logo"></div>
                <div className="media_logo_text">若您對 NatursAi 產品有任何疑問或需要進一步了解，請填寫下方聯絡表格。我們將盡快與您聯繫，並提供您所需的協助。</div>
                <div className="media_form_container">
                    <CustomSelect
                        options={["技術支援", "產品意見", "合作機會", "刪除帳號", "其他"]}
                        onSelect={handleSelectInformation}
                        lablename="信息內容"
                    />
                    <div className="mt_style_2"></div>
                    <CustomSelect
                        options={["夠益營養APP使用者", "照護人員", "醫護人員", "合作關係人", "其他"]}
                        onSelect={handleSelectIdentity}
                        lablename="您的身份"
                    />
                    <div className="mt_style_3"></div>
                    <div className="media_input_all_container">
                        <div className="media_Lable_container">
                            <span className="media_Lable_text">姓名</span>
                            <span className="media_Lable_start">*</span>
                        </div>
                        <input
                            id="your_name"
                            className="media_input_container"
                            placeholder="您的姓名"
                            value={yourName}
                            onChange={(e) => setYourName(e.target.value)}
                        />
                    </div>
                    <div className="mt_style_4"></div>

                    <div className="media_input_all_container">
                        <div className="media_Lable_container">
                            <span className="media_Lable_text">信箱</span>
                            <span className="media_Lable_start">*</span>
                        </div>
                        <input
                            type="email"
                            id="user_email"
                            className="media_input_container"
                            placeholder="您的信箱"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                    </div>
                    <div className="media_textarea_container">
                        <div className="media_textarea_Lable_container">
                            <span className="media_Lable_text">問題意見</span>
                            <span className="media_Lable_start">*</span>
                        </div>
                        <textarea
                            id="Suggestions"
                            placeholder="請輸入問題意見"
                            value={suggestions}
                            onChange={(e) => setSuggestions(e.target.value)}
                        ></textarea>
                    </div>

                    <button
                        name="submit_button"
                        className="media_connection_submit_button"
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        <span>{isLoading ? "提交中..." : "提交"}</span>
                    </button>






                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Connection;

import React, { useState } from 'react'
import "./PhoneFiltr.css"
import { HiOutlineChartBar } from 'react-icons/hi'
import { CgMenuGridR } from 'react-icons/cg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { TbMenuDeep } from 'react-icons/tb'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

function PhoneFiltr() {
    const [value, setValue] = useState([20, 70]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className="phoneFilter">
                <div className="container">
                    <div className="basicTitle">

                        <div className='basicTitleLeft'>
                            <div>
                                <p>
                                    Главная
                                </p>
                                <div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Телефоны, планшеты
                                </p>
                                <div>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Телефоны и гаджеты
                                </p>
                            </div>
                        </div>
                        <div className='basicTitleRight'>
                            <p>
                                Товаров 24 / 249
                            </p>
                        </div>

                    </div>

                    <div className="smartfon">
                        <div className="smatfonTitle">
                            <div className='smatfonTitle1'>
                                <div>
                                    <h3>
                                        Смартфоны в Ташкенте
                                    </h3>
                                </div>
                                <div className='sent'>
                                    <div>
                                        <div>
                                            <img src="/public/imgs/Bonus.svg" alt="" />
                                        </div>
                                        <div>
                                            <p>
                                                По цене
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <TbMenuDeep />

                                        </div>
                                        <div>
                                            <p>
                                                По популярности
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='smatfonTitleMenu'>
                                <div>
                                    <CgMenuGridR />

                                </div>
                                <div>
                                    <GiHamburgerMenu />

                                </div>
                            </div>
                        </div>
                        <div className="smartfonBlock">
                            <div className="smartfonLeft">
                                <div>
                                    <div className='smartfonLeftSent'>
                                        <div>
                                            <p>Цена (cум)</p>
                                        </div>
                                        <div>
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </div>
                                    </div>
                                    <div className='smartfonLeftPrise'>
                                        <div className='ot'>
                                            <p>от 300 000</p>
                                        </div>
                                        <div>
                                            <p>до 103 300 000</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Box sx={{ width: 255 }}>
                                            <Slider
                                                getAriaLabel={() => 'Temperature range'}
                                                value={value}
                                                onChange={handleChange}
                                                valueLabelDisplay="auto"
                                                getAriaValueText={valuetext}
                                            />
                                        </Box>
                                    </div>
                                </div>
                                <div>
                                    <div className='smartfonLeftSent'>
                                        <div>
                                            <p>Наличие</p>
                                        </div>
                                    </div>
                                    <div className='zabrat'>
                                        <div>
                                            <input type="checkbox" />
                                        </div>
                                        <div>
                                            <p>
                                                Забрать сегодня
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='brend'>
                                    <div className='smartfonLeftSent'>
                                        <div>
                                            <p>Бренд</p>
                                        </div>
                                        <div>
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </div>
                                    </div>
                                    <div className='lg'>
                                        <div>
                                            <input type="checkbox" />
                                        </div>
                                        <p>LG (30)</p>
                                    </div>
                                    <div className='samsung'>
                                        <div>
                                            <input type="checkbox" />
                                        </div>
                                        <p>Samsung (30)</p>
                                    </div>
                                    <div className='artel'>
                                        <div>
                                            <input type="checkbox" />
                                        </div>
                                        <p>Artel (7)</p>
                                    </div>
                                    <div className='huawei'>
                                        <div>
                                            <input type="checkbox" />
                                        </div>
                                        <p>Huawei (30)</p>
                                    </div>

                                </div>
                            </div>
                            <div className="smartfonRight">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PhoneFiltr
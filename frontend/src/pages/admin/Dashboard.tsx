import React, { useMemo } from 'react';
import ApexCharts from 'react-apexcharts';
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from '../../components/admin/Sidebar';
import Navbar from '../../components/admin/Navbar';
const Dashboard: React.FC = () => {
    // ตัวเลือกของกราฟแท่ง
    const barChartOptions = {
        chart: {
            type: 'bar',
            height: 240,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '60%',
                borderRadius: 4,
            },
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            labels: {
                style: {
                    colors: '#616161',
                    fontSize: '12px',
                    fontWeight: 400,
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#616161',
                    fontSize: '12px',
                    fontWeight: 400,
                },
            },
        },
        grid: {
            borderColor: '#dddddd',
            strokeDashArray: 5,
        },
        fill: {
            opacity: 0.8,
        },
        tooltip: {
            theme: 'dark',
        },
        colors: ['#020617'],
    };

    // ข้อมูลของกราฟแท่งสำหรับหนึ่งสัปดาห์
    const barChartSeries = [
        {
            name: 'Sales',
            data: [20, 30, 40, 35, 50, 60, 70], // ข้อมูลสำหรับวันจันทร์ถึงวันอาทิตย์
        },
    ];

    // คำนวณยอดรวมของยอดขาย
    const totalSales = useMemo(() => {
        return barChartSeries[0].data.reduce((acc, value) => acc + value, 0);
    }, [barChartSeries]);

    return (
        <div className="w-full lg:w-1/2 mb-4">
            <div className="bg-white rounded-lg shadow-md h-full">
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <div>
                        <h5 className="text-lg font-semibold">Earning Reports</h5>
                        <small className="text-gray-500">Weekly Earnings Overview</small>
                    </div>
                    <div className="relative">
                        <button className="p-1 text-gray-500 hover:text-gray-700" id="earningReportsId" aria-haspopup="true" aria-expanded="false">
                            <i className="ti ti-dots-vertical ti-sm"></i>
                        </button>
                        <div className="dropdown-menu absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg hidden" aria-labelledby="earningReportsId">
                            <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">View More</a>
                            <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Delete</a>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex flex-col md:flex-row items-start md:items-end mb-4">
                        <div className="flex items-center mb-2 md:mb-0">
                            <h1 className="text-2xl font-bold mr-2">${totalSales.toFixed(2)}</h1>
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">+4.2%</span>
                        </div>
                        <small className="text-gray-500">This week's earnings compared to last week</small>
                    </div>
                    <div id="weeklyEarningReports" className="relative min-h-[199px]">
                        <ApexCharts

                            series={barChartSeries}
                            type="bar"
                            height={240}
                        />
                    </div>
                    <div className="border-t border-gray-200 mt-4 pt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <div className="flex items-center mb-2">
                                    <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
                                        <i className="ti ti-currency-dollar"></i>
                                    </div>
                                    <h6 className="text-sm font-semibold">Earnings</h6>
                                </div>
                                <h4 className="text-xl font-bold mb-2">$545.69</h4>
                                <div className="relative h-1 bg-gray-200 rounded">
                                    <div className="absolute top-0 left-0 h-full bg-blue-500 rounded" style={{ width: '65%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center mb-2">
                                    <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
                                        <i className="ti ti-chart-pie-2"></i>
                                    </div>
                                    <h6 className="text-sm font-semibold">Profit</h6>
                                </div>
                                <h4 className="text-xl font-bold mb-2">$256.34</h4>
                                <div className="relative h-1 bg-gray-200 rounded">
                                    <div className="absolute top-0 left-0 h-full bg-blue-400 rounded" style={{ width: '50%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center mb-2">
                                    <div className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
                                        <i className="ti ti-brand-paypal"></i>
                                    </div>
                                    <h6 className="text-sm font-semibold">Expense</h6>
                                </div>
                                <h4 className="text-xl font-bold mb-2">$74.19</h4>
                                <div className="relative h-1 bg-gray-200 rounded">
                                    <div className="absolute top-0 left-0 h-full bg-red-500 rounded" style={{ width: '65%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WebsiteAnalytics: React.FC = () => {
    return (
        <div className="w-full lg:w-1/2 mb-4">
            <div className="bg-gray-800 text-white p-6 rounded-lg">
                <div className="mb-4">
                    <h5 className="text-xl font-semibold">การวิเคราะห์เว็บไซต์</h5>
                    <small>อัตราการแปลงรวม 28.5%</small>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-7/12">
                        <h6 className="text-lg font-semibold mt-3 mb-3">การจราจร</h6>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <ul className="list-none">
                                    <li className="flex items-center mb-4">
                                        <p className="bg-gray-600 text-white p-2 rounded mr-2">28%</p>
                                        <p>เซสชัน</p>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <p className="bg-gray-600 text-white p-2 rounded mr-2">1.2</p>
                                        <p>ลูกค้าเป้าหมาย</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="list-none">
                                    <li className="flex items-center mb-4">
                                        <p className="bg-gray-600 text-white p-2 rounded mr-2">3.1</p>
                                        <p>การดูหน้าเว็บ</p>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <p className="bg-gray-600 text-white p-2 rounded mr-2">12%</p>
                                        <p>แปลง</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-5/12 text-center mt-4 lg:mt-0">
                        <img
                            src="C:\Users\nutta\Desktop\React\admin\src\img\Vw.png"
                            alt="การวิเคราะห์เว็บไซต์"
                            className="mx-auto rounded-lg shadow-md"
                            width="170"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const MainDashboard: React.FC = () => {
    return (
        <Flex direction="row" minH="100vh">
            {/* <Sidebar /> */}
            <Flex flex="1" direction="column">
                <Navbar />
                <Box flex="1" bg="gray.100" p="6">

                    <div className="flex flex-col lg:flex-row">
                        {/* <Dashboard /> */}
                        <WebsiteAnalytics />
                    </div>
                </Box>
            </Flex>
        </Flex>
    );
};

export default MainDashboard;
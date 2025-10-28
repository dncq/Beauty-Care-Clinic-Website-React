import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'vi' | 'ja' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.booking': 'Book Appointment',
    'nav.branches': 'Branches',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.register': 'Register',
    'nav.dashboard': 'Dashboard',
    'nav.logout': 'Logout',
    // Homepage
    'home.banner.title': 'Your Beauty, Our Passion',
    'home.banner.subtitle': 'Experience professional beauty care with cutting-edge technology and expert specialists',
    'home.banner.cta': 'Book Now',
    'home.services.title': 'Our Services',
    'home.services.subtitle': 'Professional beauty treatments tailored to your needs',
    'home.gallery.title': 'Our Clinic',
    'home.gallery.subtitle': 'Modern facilities designed for your comfort',
    // Services
    'services.all': 'All Services',
    'services.skincare': 'Skincare',
    'services.facial': 'Facial Treatments',
    'services.body': 'Body Treatments',
    'services.spa': 'Spa & Massage',
    'services.detail': 'Service Details',
    'services.benefits': 'Benefits',
    'services.pricing': 'Pricing',
    'services.book': 'Book This Service',
    // Booking
    'booking.title': 'Book an Appointment',
    'booking.service': 'Select Service',
    'booking.branch': 'Select Branch',
    'booking.date': 'Select Date',
    'booking.time': 'Select Time',
    'booking.name': 'Your Name',
    'booking.email': 'Email Address',
    'booking.phone': 'Phone Number',
    'booking.notes': 'Additional Notes',
    'booking.submit': 'Confirm Booking',
    'booking.success': 'Booking confirmed! We will contact you shortly.',
    // Auth
    'auth.login': 'Login',
    'auth.register': 'Register',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.name': 'Full Name',
    'auth.forgot': 'Forgot Password?',
    'auth.no-account': "Don't have an account?",
    'auth.have-account': 'Already have an account?',
    'auth.verify': 'Verify OTP',
    // Dashboard
    'dashboard.welcome': 'Welcome',
    'dashboard.appointments': 'My Appointments',
    'dashboard.profile': 'Edit Profile',
    'dashboard.promotions': 'Special Offers',
    // Branches
    'branches.title': 'Our Branches',
    'branches.hours': 'Working Hours',
    'branches.phone': 'Phone',
    'branches.address': 'Address',
    'branches.view': 'View Details',
    // Contact
    'contact.title': 'Contact Us',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.info': 'Contact Information',
    // Blog
    'blog.title': 'Beauty Blog',
    'blog.latest': 'Latest Articles',
    'blog.read-more': 'Read More',
    'blog.category': 'Category',
    // Reviews
    'reviews.title': 'Customer Reviews',
    'reviews.write': 'Write a Review',
    'reviews.rating': 'Rating',
    'reviews.submit': 'Submit Review',
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.search': 'Search',
    'common.filter': 'Filter',
  },
  vi: {
    // Navigation
    'nav.home': 'Trang chủ',
    'nav.services': 'Dịch vụ',
    'nav.booking': 'Đặt lịch',
    'nav.branches': 'Chi nhánh',
    'nav.blog': 'Tin tức',
    'nav.contact': 'Liên hệ',
    'nav.login': 'Đăng nhập',
    'nav.register': 'Đăng ký',
    'nav.dashboard': 'Tài khoản',
    'nav.logout': 'Đăng xuất',
    // Homepage
    'home.banner.title': 'Vẻ Đẹp Của Bạn, Đam Mê Của Chúng Tôi',
    'home.banner.subtitle': 'Trải nghiệm chăm sóc sắc đẹp chuyên nghiệp với công nghệ tiên tiến và chuyên gia hàng đầu',
    'home.banner.cta': 'Đặt lịch ngay',
    'home.services.title': 'Dịch vụ của chúng tôi',
    'home.services.subtitle': 'Liệu trình làm đẹp chuyên nghiệp phù hợp với nhu cầu của bạn',
    'home.gallery.title': 'Phòng khám của chúng tôi',
    'home.gallery.subtitle': 'Cơ sở vật chất hiện đại được thiết kế cho sự thoải mái của bạn',
    // Services
    'services.all': 'Tất cả dịch vụ',
    'services.skincare': 'Chăm sóc da',
    'services.facial': 'Điều trị da mặt',
    'services.body': 'Điều trị cơ thể',
    'services.spa': 'Spa & Massage',
    'services.detail': 'Chi tiết dịch vụ',
    'services.benefits': 'Lợi ích',
    'services.pricing': 'Bảng giá',
    'services.book': 'Đặt dịch vụ này',
    // Booking
    'booking.title': 'Đặt lịch hẹn',
    'booking.service': 'Chọn dịch vụ',
    'booking.branch': 'Chọn chi nhánh',
    'booking.date': 'Chọn ngày',
    'booking.time': 'Chọn giờ',
    'booking.name': 'Họ và tên',
    'booking.email': 'Email',
    'booking.phone': 'Số điện thoại',
    'booking.notes': 'Ghi chú thêm',
    'booking.submit': 'Xác nhận đặt lịch',
    'booking.success': 'Đặt lịch thành công! Chúng tôi sẽ liên hệ với bạn sớm.',
    // Auth
    'auth.login': 'Đăng nhập',
    'auth.register': 'Đăng ký',
    'auth.email': 'Email',
    'auth.password': 'Mật khẩu',
    'auth.name': 'Họ và tên',
    'auth.forgot': 'Quên mật khẩu?',
    'auth.no-account': 'Chưa có tài khoản?',
    'auth.have-account': 'Đã có tài khoản?',
    'auth.verify': 'Xác thực OTP',
    // Dashboard
    'dashboard.welcome': 'Xin chào',
    'dashboard.appointments': 'Lịch hẹn của tôi',
    'dashboard.profile': 'Chỉnh sửa hồ sơ',
    'dashboard.promotions': 'Ưu đãi đặc biệt',
    // Branches
    'branches.title': 'Chi nhánh của chúng tôi',
    'branches.hours': 'Giờ làm việc',
    'branches.phone': 'Điện thoại',
    'branches.address': 'Địa chỉ',
    'branches.view': 'Xem chi tiết',
    // Contact
    'contact.title': 'Liên hệ với chúng tôi',
    'contact.message': 'Tin nhắn của bạn',
    'contact.send': 'Gửi tin nhắn',
    'contact.info': 'Thông tin liên hệ',
    // Blog
    'blog.title': 'Blog làm đẹp',
    'blog.latest': 'Bài viết mới nhất',
    'blog.read-more': 'Đọc thêm',
    'blog.category': 'Danh mục',
    // Reviews
    'reviews.title': 'Đánh giá của khách hàng',
    'reviews.write': 'Viết đánh giá',
    'reviews.rating': 'Đánh giá',
    'reviews.submit': 'Gửi đánh giá',
    // Common
    'common.loading': 'Đang tải...',
    'common.error': 'Đã xảy ra lỗi',
    'common.search': 'Tìm kiếm',
    'common.filter': 'Lọc',
  },
  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.services': 'サービス',
    'nav.booking': '予約',
    'nav.branches': '支店',
    'nav.blog': 'ブログ',
    'nav.contact': 'お問い合わせ',
    'nav.login': 'ログイン',
    'nav.register': '登録',
    'nav.dashboard': 'ダッシュボード',
    'nav.logout': 'ログアウト',
    // Homepage
    'home.banner.title': 'あなたの美しさ、私たちの情熱',
    'home.banner.subtitle': '最先端技術と専門家による本格的な美容ケアをご体験ください',
    'home.banner.cta': '今すぐ予約',
    'home.services.title': '私たちのサービス',
    'home.services.subtitle': 'あなたのニーズに合わせたプロフェッショナルな美容トリートメント',
    'home.gallery.title': '私たちのクリニック',
    'home.gallery.subtitle': 'あなたの快適さのために設計された最新の施設',
    // Services
    'services.all': 'すべてのサービス',
    'services.skincare': 'スキンケア',
    'services.facial': 'フェイシャルトリートメント',
    'services.body': 'ボディトリートメント',
    'services.spa': 'スパ＆マッサージ',
    'services.detail': 'サービス詳細',
    'services.benefits': 'メリット',
    'services.pricing': '料金',
    'services.book': 'このサービスを予約',
    // Booking
    'booking.title': '予約する',
    'booking.service': 'サービスを選択',
    'booking.branch': '支店を選択',
    'booking.date': '日付を選択',
    'booking.time': '時間を選択',
    'booking.name': 'お名前',
    'booking.email': 'メールアドレス',
    'booking.phone': '電話番号',
    'booking.notes': '追加メモ',
    'booking.submit': '予約を確認',
    'booking.success': '予約が確認されました！すぐにご連絡いたします。',
    // Auth
    'auth.login': 'ログイン',
    'auth.register': '登録',
    'auth.email': 'メール',
    'auth.password': 'パスワード',
    'auth.name': '氏名',
    'auth.forgot': 'パスワードをお忘れですか？',
    'auth.no-account': 'アカウントをお持ちではありませんか？',
    'auth.have-account': 'すでにアカウントをお持ちですか？',
    'auth.verify': 'OTP認証',
    // Dashboard
    'dashboard.welcome': 'ようこそ',
    'dashboard.appointments': 'マイ予約',
    'dashboard.profile': 'プロフィール編集',
    'dashboard.promotions': '特別オファー',
    // Branches
    'branches.title': '支店',
    'branches.hours': '営業時間',
    'branches.phone': '電話',
    'branches.address': '住所',
    'branches.view': '詳細を見る',
    // Contact
    'contact.title': 'お問い合わせ',
    'contact.message': 'メッセージ',
    'contact.send': 'メッセージを送信',
    'contact.info': '連絡先情報',
    // Blog
    'blog.title': '美容ブログ',
    'blog.latest': '最新記事',
    'blog.read-more': '続きを読む',
    'blog.category': 'カテゴリー',
    // Reviews
    'reviews.title': 'お客様のレビュー',
    'reviews.write': 'レビューを書く',
    'reviews.rating': '評価',
    'reviews.submit': 'レビューを送信',
    // Common
    'common.loading': '読み込み中...',
    'common.error': 'エラーが発生しました',
    'common.search': '検索',
    'common.filter': 'フィルター',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.services': '服务',
    'nav.booking': '预约',
    'nav.branches': '分店',
    'nav.blog': '博客',
    'nav.contact': '联系我们',
    'nav.login': '登录',
    'nav.register': '注册',
    'nav.dashboard': '仪表板',
    'nav.logout': '登出',
    // Homepage
    'home.banner.title': '您的美丽，我们的热情',
    'home.banner.subtitle': '体验具有尖端技术和专家专家的专业美容护理',
    'home.banner.cta': '立即预约',
    'home.services.title': '我们的服务',
    'home.services.subtitle': '根据您的需求量身定制的专业美容护理',
    'home.gallery.title': '我们的诊所',
    'home.gallery.subtitle': '为您的舒适而设计的现代化设施',
    // Services
    'services.all': '所有服务',
    'services.skincare': '护肤',
    'services.facial': '面部护理',
    'services.body': '身体护理',
    'services.spa': '水疗按摩',
    'services.detail': '服务详情',
    'services.benefits': '好处',
    'services.pricing': '价格',
    'services.book': '预订此服务',
    // Booking
    'booking.title': '预约',
    'booking.service': '选择服务',
    'booking.branch': '选择分店',
    'booking.date': '选择日期',
    'booking.time': '选择时间',
    'booking.name': '您的姓名',
    'booking.email': '电子邮件',
    'booking.phone': '电话号码',
    'booking.notes': '附加说明',
    'booking.submit': '确认预约',
    'booking.success': '预约确认！我们将尽快与您联系。',
    // Auth
    'auth.login': '登录',
    'auth.register': '注册',
    'auth.email': '电子邮件',
    'auth.password': '密码',
    'auth.name': '全名',
    'auth.forgot': '忘记密码？',
    'auth.no-account': '没有账户？',
    'auth.have-account': '已有账户？',
    'auth.verify': '验证OTP',
    // Dashboard
    'dashboard.welcome': '欢迎',
    'dashboard.appointments': '我的预约',
    'dashboard.profile': '编辑个人资料',
    'dashboard.promotions': '特别优惠',
    // Branches
    'branches.title': '我们的分店',
    'branches.hours': '工作时间',
    'branches.phone': '电话',
    'branches.address': '地址',
    'branches.view': '查看详情',
    // Contact
    'contact.title': '联系我们',
    'contact.message': '您的留言',
    'contact.send': '发送消息',
    'contact.info': '联系信息',
    // Blog
    'blog.title': '美容博客',
    'blog.latest': '最新文章',
    'blog.read-more': '阅读更多',
    'blog.category': '类别',
    // Reviews
    'reviews.title': '客户评价',
    'reviews.write': '写评论',
    'reviews.rating': '评分',
    'reviews.submit': '提交评论',
    // Common
    'common.loading': '加载中...',
    'common.error': '发生错误',
    'common.search': '搜索',
    'common.filter': '筛选',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Auto-detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('vi')) {
      setLanguageState('vi');
    } else if (browserLang.startsWith('ja')) {
      setLanguageState('ja');
    } else if (browserLang.startsWith('zh')) {
      setLanguageState('zh');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

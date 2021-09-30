const ap = new APlayer({
    container: document.getElementById('aplayer'), //����������Ԫ��
    mini: false, //����ģʽ
    autoplay: false, //�Զ�����
    theme: '#FADFA3', //����ɫ
    loop: 'all', //��Ƶѭ������, ��ѡֵ: 'all'ȫ��ѭ��, 'one'����ѭ��, 'none'��ѭ��
    order: 'random', //��Ƶѭ��˳��, ��ѡֵ: 'list'�б�ѭ��, 'random'���ѭ��
    preload: 'auto', //Ԥ���أ���ѡֵ: 'none', 'metadata', 'auto'
    volume: 0.7, //Ĭ����������ע�ⲥ����������û����ã��û��ֶ�����������Ĭ��������ʧЧ
    mutex: true, //���⣬��ֹ���������ͬʱ���ţ���ǰ����������ʱ��ͣ����������
    listFolded: false, //�б�Ĭ���۵�
    listMaxHeight: 90, //�б����߶�
    lrcType: 3, //��ʴ��ݷ�ʽ
    audio: [ //��Ƶ��Ϣ,��������
        {
            name: 'name1', //��Ƶ����
            artist: 'artist1', //��Ƶ������
            url: 'url1.mp3', //��Ƶ����
            cover: 'cover1.jpg', //��Ƶ����
            lrc: 'lrc1.lrc', //��Ƶ��ʣ���������lrcTypeʹ��
            theme: '#ebd0c2' //�л�������Ƶʱ������ɫ��������� theme ���ȼ���
        },
        {
            name: 'name2', //���ֻ��һ�׸裬ɾ����һ�飬���и���������˸�ʽ����������
            artist: 'artist2',
            url: 'url2.mp3',
            cover: 'cover2.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        }
    ]
});